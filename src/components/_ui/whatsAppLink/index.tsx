import whats  from "@/../../public/images/whatsapp.png"
import { ALink } from "./whatsAppLink.styled";

export default function WhatsAppLink (){ 


    return (
        <ALink href='https://wa.me/5535910018923?text=Gostaria+de+ajuda+' target='_blank'> 
            <img style={{height:"auto", width:"3rem"}} src={whats.src} alt="whats" />
        </ALink>
    )
}