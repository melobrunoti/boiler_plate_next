import { getCookie } from "@/utils/getCookies";
import { removeCookie } from "@/utils/removeCookies";


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
