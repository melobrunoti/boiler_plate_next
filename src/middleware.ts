
import { NextResponse, type NextRequest  } from "next/server";

export function middleware (request: NextRequest){ 
    const token = request.cookies.get("access_token");
    if(!token){ 
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config ={ 
    matcher: "/home"
}