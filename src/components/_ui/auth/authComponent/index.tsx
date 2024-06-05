import { db } from "@/db/db.model";
import { Children, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface  IProps { 
    children: ReactNode
}

export default function AuthToken ( {children}: IProps ){ 

    const router = useRouter()
    useEffect(()=> { 
        db.AuthTable.get(1).then((value )=>{!value?.token  && router.push("/login")})
    })

    



    return(
        <>
        {children}
        </>
    )
}