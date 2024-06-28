import { BASE_API, BASE_API_CONTAINER, NEXT_PUBLIC_CONTAINER_V2_API } from '@/constants';
import { loggedFetch, loggedFetchConteiner } from '../config';



export function getAccessLevel() {
  return loggedFetch(`${BASE_API_CONTAINER}/usuario/nivelacesso`);
} 

export function getBanks() {
  return fetch(`${BASE_API}/bancos/buscar`);
}


export function userLoginToken (token:string, bodyRequest:any){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user/token`, {method:"POST", body:bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}

export function userLoginAuth (token: string, bodyRequest:any){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user/auth`, {method:"POST", body:bodyRequest, headers:{Authorization: `Bearer ${token}`}})
}

export function GetLoggedUser  (token: string){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/user`, {method:"GET", headers:{Authorization: `Bearer ${token}`}})
}


export function GetOperations(token: string){ 
    return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/operation`, {method:"GET", headers:{Authorization: `Bearer ${token}`}})
}

export function GetInstallments(token: string, bodyRequest:any){ 
  return loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/selfService/client/operation/installments`, {method:"POST", body:bodyRequest,  headers:{Authorization: `Bearer ${token}`}})
}