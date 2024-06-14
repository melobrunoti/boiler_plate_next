import { useQuery } from "@tanstack/react-query";
import { getClientToken, getLoanTipes, getPurchaseCode } from "./fetchers";

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
  return  useQuery({
    queryKey: ['getClientToken'],
    queryFn: ( ) => 
      getClientToken().then((res) => { 
        return res
      })
    })

}