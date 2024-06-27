'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetLoggedUser, GetOperations, getAccessLevel, getBanks, userLoginAuth, userLoginToken } from "./fetchers";
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