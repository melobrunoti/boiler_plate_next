
import { NextResponse, type NextRequest  } from "next/server";
import { db } from "./db/db.model";

export async function middleware (request: NextRequest){ 
    // try {
    //     // Busca o token na tabela de autenticação do IndexedDB
    //     const authData = await db.AuthTable.get(1);
    
    //     // Se não houver token, redireciona para a página de boas-vindas
    //     if (!authData?.token) {
    //       return NextResponse.redirect(new URL('/welcome', request.url));
    //     }
    
    //     // Se o token existir, permite a continuação da requisição
    //     return NextResponse.next();
    //   } catch (error) {
    //     console.error('Erro no middleware:', error);
    //     // Tratar erros conforme necessário
    //     //return NextResponse.error(error);
    //   }
}

export const config ={ 
    matcher: "/home"
}