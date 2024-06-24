import { useMutation, useQuery } from "@tanstack/react-query";
import { getClientToken, getLoanTipes, getPurchaseCode, userExists, userExistsWhitAxios } from "./fetchers";
import { useTokenClientStore } from "@/store/loanSimulation";

export function getLoanTipesQery(token: string){ 
    return useQuery({
       queryKey: ['getLoanTipes',token],
       queryFn: () =>
          getLoanTipes(token).then((res) => {
            return res
          }),
       enabled:!!token
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
      queryKey:["getUserExists"],
      queryFn: ()=> { 
        return userExists( dataRequest.token, dataRequest.data )
      },

      enabled: !!data
    })
}

export function UserExistsQueryWithAxios ( token:string , data:any){ 
  return useQuery({
      queryKey:["getUserExistsWithAxios", data],
      queryFn: ()=> { 
        return userExistsWhitAxios( token ,data )
      },

      enabled: !!data
    })
}