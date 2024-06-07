import { NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import { getCookie } from "@/utils/getCookies";
import { removeCookie } from "@/utils/removeCookies";
import { json } from "stream/consumers";


export const loggedFetch = async (url:string | URL | Request, params:RequestInit={}): Promise<Response> => {
  const token:string|null = getCookie("access_token")
  
  if(!params ){ 
    params={method: 'GET'}
  }

  if(!params.headers){ 
    params["headers"] = {} as HeadersInit;
  }

  if(token ){ 
    //@ts-ignore
    params.headers.Authorization = `Bearer ${token}`;
  }else{ 
    window.location.href = "/login"
  }

  const data     = await fetch(url, params);
  
  const dataJson = await data.json()
  
  /// tratativa de redirecionamento  em caso de token invalido 
  if(dataJson.mensagem === "jwt invalido"&& token ){ 
    removeCookie("access_token");
    window.location.href = "/login"
  }else if(dataJson.mensagem === "jwt invalido"){ 
    window.location.href = "/login"
  }
  ///---------------------///----------------------///-------------------------///

  return dataJson;
};

const  requestClientToken  = async ( ) => {
  const requesTokenBody = {client_key: "722A697A2C780B67", client_secret:"HjDnHwhh)mKC!7&p)o5y(re"}
  const paramsRequestToken  = {method:  "POST",   headers: {'Content-Type': 'application/json'}, body: JSON.stringify( requesTokenBody), }
    //@ts-ignore
  const dataRequestToken = await fetch (NEXT_PUBLIC_CONTAINER_V2_API+"/project/auth", paramsRequestToken  )
  const resToken = await dataRequestToken.json()
  return resToken.token
}

export const  loggedFetchConteiner =  async (url:string | URL | Request, params:RequestInit={}): Promise<Response> => {

  if(!params ){ 
    params={method: 'GET'}
  }

  if(!params.headers){ 
    params["headers"] = {} as HeadersInit;
  }

  const token =  await requestClientToken()
  //@ts-ignore
  params.headers.Authorization = `Bearer ${token}`;

  const data     = await fetch(url, params);
  const dataJson = await data.json();
  return dataJson;

};