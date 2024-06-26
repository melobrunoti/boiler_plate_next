import { useMutation, useQuery } from "@tanstack/react-query";
import { createClientUser, getClientToken, getLoanInstallments, getLoanTipes, getPurchaseCode, userExists } from "./fetchers";
import { useTokenClientStore } from "@/store/loanSimulation";
import { string } from "zod";

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

