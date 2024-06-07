import {  Button } from "@mui/material";
import whats  from "@/../../public/images/whatsapp.png"

export default function WhatsAppLink (){ 

    function handleClick( ){ 
       window.open('https://wa.me/5535910018923?text=Gostaria+de+ajuda+', '_blank');
    }

    return (
        <Button onClick={()=> handleClick()}> 
            <img src={whats.src} alt="whats" />
        </Button>
    )
}