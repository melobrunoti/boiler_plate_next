import { BASE_API, NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import { api, loggedFetchConteiner, requestClientToken } from "../config";

interface IbodyUserExis { 
    CPFCNPJ: string
}


export function getClientToken ( ) {
    return requestClientToken()
}
export function getLoanTipes(token: string) {
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/operation/product`,{method:"GET", headers:{Authorization: `Bearer ${token}` }});
} 

export function getPurchaseCode( token: string){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/purchaser`,{method:"GET", headers:{Authorization: `Bearer ${token}` }})
}

export function userExists(token:string, bodyRequest: BodyInit){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/userExists`, {method:"GET", body:bodyRequest ,headers:{Authorization: `Bearer ${token}`}})
}

export function userExistsWhitAxios(token:string, bodyRequest: IbodyUserExis ){ 
    return api.get("/selfService/client/userExists", {data:bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}
