import { BASE_API, NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import { loggedFetchConteiner, requestClientToken } from "../config";


export function getClientToken ( ) {
    return requestClientToken()
}
export function getLoanTipes(token: string) {
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/product?terms`,{method:"GET", headers:{Authorization: `Bearer ${token}` }});
} 

export function getPurchaseCode( token: string){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/purchaser`,{method:"GET", headers:{Authorization: `Bearer ${token}` }})
}