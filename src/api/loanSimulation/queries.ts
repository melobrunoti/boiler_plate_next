import { useMutation, useQuery } from "@tanstack/react-query";
import { CreateUserAccount, banksSearch, cepSearch, createClientUser, createOperationBySimulation, createOperationDocument, createOperationPayment, createUser, getClientToken, getLoanInstallments, getLoanTipes, getPurchaseCode, userExists } from "./fetchers";
import { useTokenClientStore } from "@/store/loanSimulation";
import { string } from "zod";

export function getLoanTipesQery(token: string){ 
    return useQuery({
       queryKey: ['getLoanTipes',token],
       queryFn: () =>
          getLoanTipes(token).then((res) => {
            return res
          }),
       enabled:!!token,
       refetchOnWindowFocus: false,
    });
}

export function getPurchaseCodeQery(token: string){ 
  return useQuery({
     queryKey: ['getPurchaseCode',token],
     queryFn: () =>
      getPurchaseCode(token).then((res) => {
       return res
     }),
     enabled:!!token
  });
}

export function getClientTokenQuery( ){ 
  const {setToken } = useTokenClientStore() 
  return  useQuery({
    queryKey: ['getClientToken'],
    queryFn: ( ) => 
      getClientToken().then((res) => { 
        setToken(res)
        //return res
      })
    })

}

export function UserExistsQuery (token:string, data:any){ 
  const dataRequest = { token: token, data: data}
  return useQuery({
      queryKey:["getUserExists",data],
      queryFn: ()=> { 
        return userExists( dataRequest.token, dataRequest.data )
      },
      refetchOnWindowFocus:false,
      enabled: !!data
    })
}


export function GetLoanInstallmentsQuery (token:string, data:any, loanCode: string, purchaseCode:string, requiredValue:number){ 
  return useQuery({ 
    queryKey: ["getLoanInstallments",requiredValue],
    queryFn: ()=> { 
      return getLoanInstallments( token, data, loanCode)
    },
    enabled: !!purchaseCode,
  })
}

export function CreateClientUserQuery( token:string, data:any,){ 
  return useQuery( { 
    queryKey: ["createClientUser",],
    queryFn: ()=>{ 
      return createClientUser(token,  data )
    },
    enabled: false,

  })
}


export function CepSearchQuery( token:string, data:any,){

  return useQuery( { 
    queryKey: ["cepSearch", data],
    queryFn: ()=>{ 
      return cepSearch( token, data )
    },
    enabled: !! token && data != undefined ,

    refetchOnWindowFocus: false,
  })
}

export function banksSearchQuery( token:string,){
  return useQuery( { 
    queryKey: ["banksSearch"],
    queryFn: ()=>{ 
      return banksSearch( token )
    },
    enabled: !!token,
    refetchOnWindowFocus: false,
  })
}

export function CreateUserQuery(token: string, body: any){ 
  return useQuery( { 
    queryKey: [ "CreateUser",body ],
    queryFn: ( ) => { 
      return createUser( token, body)
    }, 
    enabled: !!token && !!body,
    refetchOnWindowFocus: false,
  })
}

export function GetCreateUserAccountQuery(token: string, body: string, hash: string ){ 
    return useQuery( { 
      queryKey: ["CreateUserAccount", hash,],
      queryFn: ( )=> { 
        return CreateUserAccount(token, body , hash )
      },
      enabled : !!token && !!hash && !!body,
      refetchOnWindowFocus: false, 
    })
}

export function createOperationBySimulationQuery(token: string, hash: string | undefined, controll: string|undefined   ){ 
  return useQuery( { 
    queryKey: ["createOperationBySimulation", hash, controll],
    queryFn: ( )=> { 
      return createOperationBySimulation(token, hash!)
    },
    enabled : !!hash && !!controll,
    refetchOnWindowFocus: false, 
  })
}

 
export function createOperationPaymentQuery(token: string, body: string, hash: string| undefined , controller: string | undefined  ){ 
  return useQuery( { 
    queryKey: ["createOperationPayment", hash, controller],
    queryFn: ( )=> { 
      return createOperationPayment(token,body, hash!)
    },
    enabled : !!body && !!hash && !!controller,
    refetchOnWindowFocus: false, 
  })
} 

export function createOperationDocumentCpfQuery(token: string, body:string | false, hash: string| undefined ,   ){ 
  return useQuery( { 
    queryKey: ["createOperationDocumentCpf", hash, body],
    queryFn: ( )=> {
      return createOperationDocument(token,body, hash!)
    },
    enabled : !!body && !!hash ,
    refetchOnWindowFocus: false, 
  })
}


export function createOperationDocumentCpfVerseQuery(token: string, body: string | false, hash: string| undefined  ){ 
  return useQuery( { 
    queryKey: ["createOperationDocumentCpfVerse", hash, body],
    queryFn: ( )=> {
      return createOperationDocument(token,body, hash!)
    },
    enabled : !!body && !!hash,
    refetchOnWindowFocus: false, 
  })
}


export function createOperationDocumentCNHQuery(token: string, body: string | false, hash: string| undefined ){ 
  return useQuery( { 
    queryKey: ["createOperationDocumentCNH", hash, body],
    queryFn: ( )=> {
      return createOperationDocument(token,body, hash!)
    },
    enabled : !!body && !!hash ,
    refetchOnWindowFocus: false, 
  })
}


export function createOperationDocumentFaceQuery(token: string, body: string | false, hash: string| undefined ){ 
  return useQuery( { 
    queryKey: ["createOperationDocumentFace", hash,body],
    queryFn: ( )=> {
      return createOperationDocument(token,body, hash!)
    },
    enabled : !!body && !!hash ,
    refetchOnWindowFocus: false, 
  })
}

export function createOperationDocumentFaceAndDocumentQuery(token: string, body: string | false, hash: string| undefined   ){ 
  return useQuery( { 
    queryKey: [" createOperationDocumentFaceAndDocument", hash, body],
    queryFn: ( )=> {
      return createOperationDocument(token,body, hash!)
    },
    enabled : !!body && !!hash ,
    refetchOnWindowFocus: false, 
  })
}




