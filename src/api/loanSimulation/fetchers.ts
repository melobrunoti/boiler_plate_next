import { BASE_API, NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import { loggedFetchConteiner, requestClientToken } from "../config";

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
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/userExists`, {method:"POST", body:bodyRequest ,headers:{Authorization: `Bearer ${token}`}})
}

export function getLoanInstallments (token:string , bodyRequest: BodyInit, loanCode:string){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/simulation/all/${loanCode}`, {method:"POST", body: bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}

export function createClientUser(token:string, bodyRequest: BodyInit){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user`, {method:"POST", body:bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}
