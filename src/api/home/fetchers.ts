import { BASE_API, BASE_API_CONTAINER, NEXT_PUBLIC_CONTAINER_V2_API } from '@/constants';
import { loggedFetch, loggedFetchConteiner } from '../config';



export function getAccessLevel() {
  return loggedFetch(`${BASE_API_CONTAINER}/usuario/nivelacesso`);
} 

export function getBanks() {
  return fetch(`${BASE_API}/bancos/buscar`);
}


export function userLoginToken (token:string, bodyRequest:BodyInit){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user/token`, {method:"POST", body:bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}

export function userLoginAuth (token: string, bodyRequest:BodyInit){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user/auth`, {method:"POST", body:bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}

export function GetLoggedUser  (token: string){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user`, {method:"GET", headers:{Authorization: `Bearer ${token}`}})
}


export function GetOperations(token: string){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/operation`, {method:"GET", headers:{Authorization: `Bearer ${token}`}})
}

export function GetInstallments(token: string, bodyRequest:BodyInit){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/operation/installments`, {method:"POST", body:bodyRequest,  headers:{Authorization: `Bearer ${token}`}})
}

export function GetStatusOperation(token: string, bodyRequest:BodyInit){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/operation/status`, {method:"POST", body:bodyRequest,  headers:{Authorization: `Bearer ${token}`}})
}

export function contractVinculate(token: string, bodyRequest:BodyInit, code:string ){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/signature/subscriber/${code}`, {method:"POST", body:bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}
export function GetContractOperation(token: string, code:string ){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/signature/contract/${code}`, {method:"POST",  headers:{Authorization: `Bearer ${token}`}})
}

export function singnatureContract(token: string, code:string ){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/signature/contract/${code}`, {method:"PUT",  headers:{Authorization: `Bearer ${token}`}})
}

export function GetDocumentStatus(token: string, code:string ){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/document/list/${code}`, {method:"GET",  headers:{Authorization: `Bearer ${token}`}})
}
export function SendDocument(token: string, code:string, body: BodyInit ){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/document/base64/${code}`, {method:"POST", body:body,  headers:{Authorization: `Bearer ${token}`}})
}
export function updatePassword( token: string, bodyRequest:BodyInit  ){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user/password`, {method:"PUT", body:bodyRequest,  headers:{Authorization: `Bearer ${token}`}})
}

export function listContract(token:string, hash: string  ){
return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/signature/contract/list/${hash}`, {method:"GET",  headers:{Authorization: `Bearer ${token}`}})
}
