
import { NextResponse, type NextRequest  } from "next/server";
import { db } from "./db/db.model";

export async function middleware (request: NextRequest){ 
    //db.AuthTable.get(1).then((value )=>{!value?.token && NextResponse.redirect(new URL("/login", request.url))})
}

export const config ={ 
    matcher: "/home"
}