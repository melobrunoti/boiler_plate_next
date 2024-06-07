import { useQuery } from "@tanstack/react-query";
import { getLoanTipes } from "./fetchers";

export function getLoanTipesQery(){ 
    
    return useQuery({
       queryKey: ['getLoanTipes'],
       queryFn: () =>
        getLoanTipes().then((res) => {
         return res.json();
       }),
    });
}