'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetContractOperation, GetDocumentStatus, GetInstallments, GetLoggedUser, GetOperations, GetStatusOperation, SendDocument, contractVinculate, getAccessLevel, getBanks, listContract, singnatureContract, updatePassword, userLoginAuth, userLoginToken } from "./fetchers";
import { IRequestLoginData } from "@/components/login/Login/types";
import { loginRequest } from "@/components/login/Login/fetchers";
import { db } from "@/db/db.model";

export function getBanksQery(){ 
    
    return useQuery({
       queryKey: ['getBanks'],
       queryFn: () =>
       getBanks().then((res) => {
         return res.json();
       }),
    });
}

export function getAccessLevelMutation (){ 

    return useMutation({
        mutationFn: ()=> { 
          return getAccessLevel()
        },
        onSuccess: (data)=> { 
        },
    })
}

export function loginRequestMutation (){ 
    return useMutation({
        mutationFn: ( data:IRequestLoginData )=> { 
          return loginRequest( data )
        },
        onSuccess: (data)=> { 
            const access = data.resultado.access_token
            const dataToSave = { token:data.resultado.access_token}
            const id = db.AuthTable.add(dataToSave)
            

          //const atualDate = new Date();
          //const expiresTime  = Number(data.resultado.expires_in)*1000;
          //const dateWithExpiresTime = new Date(atualDate.getTime()+expiresTime);
          //const dateWithExpiresTimeInUTC = dateWithExpiresTime.toUTCString();
          //document.cookie = `nome=${data.resultado.nome}; expires=${dateWithExpiresTimeInUTC}  path=/`;
          //document.cookie = `access_token=${data.resultado.access_token}; expires=${dateWithExpiresTimeInUTC}  path=/`;
        },
      })
}


export function loginRequestTokenQuery(token: string, body: any){ 
   return useQuery({
    queryKey: ['userLoguinToken',body],
    queryFn: ()=>{
      return userLoginToken(token, body)
    }, 
    enabled: !!body,
    retry:false,
    refetchOnMount:false,
   })
}

export function loginRequestAuthQuery(token: string , body: any,){ 
  return useQuery({ 
    queryKey: ["userLoguinAuth",body],
    queryFn: ( )=> { 
      return userLoginAuth(token, body)
    }, 
    enabled: !!body,
    retry:false
  })
}

export function GetLoggedUserQuery( token: string ){ 
  return useQuery({ 
    queryKey: ["GetLoggedUser"],
    queryFn: ( ) => { 
      return GetLoggedUser(token)
    },
    enabled:!!token,
  })
}

export function GetOperationsQuery(token: string ){ 
  return useQuery({ 
    queryKey: ["GetOperations"],
    queryFn: ( )=> { 
      return GetOperations(token)
    },
    enabled: !!token,
  })
}

export function GetInstallmentsQuery(token: string, data:any ){ 
  return useQuery({ 
    queryKey: ["GetInstallments"],
    queryFn: ()=> { 
      return GetInstallments(token, data)
    },
    enabled: !!token,
  })
}

export function GetStatusOperationQuery(token: string, data:any ){ 
  return useQuery({ 
    queryKey: ["GetStatusOperation", data ],
    queryFn: ()=> { 
      return GetStatusOperation(token, data)
    },
    enabled: !!token && !!data,
    refetchOnWindowFocus: false,
  })
}



export function ContractVinculateQuery(token: string , body:string, code: string, contract : boolean ){ 
  return useQuery({ 
    queryKey: ["contractVinculate", code, body, contract  ],
    queryFn: ()=> { 
      return contractVinculate(token, body, code)
    },
    enabled : !!token && !!contract && !!body && !!code,
    refetchOnWindowFocus: false,
    refetchOnReconnect:false,
  })
} 

export function GetContractQuery(token: string ,code: string, activate: boolean | undefined , ){ 
  return useQuery({ 
    queryKey: ["GetContractOperation", code, activate],
    queryFn: ()=> { 
      return GetContractOperation(token, code)
    },
    enabled: !!token && !!code && !!activate,
    refetchOnWindowFocus: false,
    refetchOnReconnect:false,
  })
} 

export function singnatureContractQuery(token: string ,code: string, ){ 
  return useQuery({ 
    queryKey: ["singnatureContract", code],
    queryFn: ()=> { 
      return singnatureContract(token, code)
    },
    enabled:false,
    refetchOnWindowFocus: false,
    refetchOnReconnect:false,
    retry: false,
  })
} 

export function GetDocumentStatusQuery(token: string ,code: string|undefined ){ 
  return useQuery({ 
    queryKey: ["GetDocumentStatus", code],
    queryFn: ()=> { 
      return GetDocumentStatus(token, code!)
    },
    enabled: !!token && !!code
  })
} 

export function SendDocumentQuery(token: string ,code: string|undefined, body: string|undefined  ){ 
  return useQuery({ 
    queryKey: ["SendDocument", code, body],
    queryFn: ()=> { 
      return SendDocument(token, code!, body! )
    },
    enabled: !!token && !!code && !!body, 
    retry:false,  
    refetchOnReconnect:false,
    refetchOnWindowFocus:false,
  })
}  


export function UpdatePasswordQuery(token: string | undefined, body: string | undefined  ){ 
  return useQuery({
    queryKey: ["updatePassword", body ],
    queryFn: ()=> { 
      return updatePassword( token!, body! )
    },
    enabled: !!body && !!token , 
    refetchOnWindowFocus: false, 
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
}

export function ListContractsQuery(token: string|undefined,  hash: string | undefined, controll: boolean  ){ 

  return useQuery({ 
    queryKey: ["ListContract", hash, controll ],
    queryFn: ()=> { 
      return listContract( token!, hash! )
    },
    enabled:!!token && !!hash,
    refetchOnWindowFocus: false, 
  })
}
