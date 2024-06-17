import { useQuery } from "@tanstack/react-query";
import { getClientToken, getLoanTipes, getPurchaseCode } from "./fetchers";
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
  const {setToken } = useTokenClientStore() 
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