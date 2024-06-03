
import { NextResponse, type NextRequest  } from "next/server";
import { getToken, initializeDB } from "./utils/indexedDb";

export async function middleware (request: NextRequest){ 
    initializeDB() 
    const token  = await getToken().then((token)=>{  return token } )
    console.log(token)
    if(!token){
        return NextResponse.redirect(new URL("/login", request.url))                                                            
    }
    
}

export const config ={ 
    matcher: "/home"
}