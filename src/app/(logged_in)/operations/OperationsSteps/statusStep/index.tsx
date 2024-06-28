import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, BodyContent, DivContent, FooterDiv, ContentModaContact, HeaderModal, BodyModal, CardContact } from "./MonitorStatus.styled"
import { SteperStatus } from "./SteperStatus";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ModalUpLowGeneric from "@/components/_ui/modals/ModalUpLowGeneric";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';



interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
    setBack?: Dispatch<SetStateAction<boolean>>,
    setStepInfo?: Dispatch<SetStateAction<boolean>>
} 

export const StatusSteps = ({setStep, setTitle, setBack, setStepInfo}:iprops ) => {

    const [openModalContact, setOpenModalContact] = useState(false as boolean);

    useEffect( ( )=> { 
        setStepInfo && setStepInfo( false)
        setBack && setBack(false)
        setTitle("Status")
    },[])

    function modalContact( ){ 
        setOpenModalContact(true)
    }

    return(
        <Content>
            <BodyContent>
                <DivContent>
                    <div>
                    {/* map aki */}
                        <SteperStatus title="Solicitação de empréstimo" text="Enviado" status="Concluído"  StepNumber={1}/> 
                        <SteperStatus title="Documentos" text="Enviado" status="Em análise" selected={true} StepNumber={2}/> 
                        <SteperStatus title="Contrato" text="Assinatura do contrato" status="Aguardando"  StepNumber={3}/> 
                        <SteperStatus title="Conclusão" text="Pagamento de crédito" status="Aguardando"  StepNumber={4} final={true} /> 
                    </div>
                    <DivButtons>
                        <PrimaryButton type="submit" callback={()=>{}}>Assinar contrato</PrimaryButton>
                    </DivButtons>
                    <FooterDiv onClick={()=> modalContact()}>
                        <ContactSupportIcon  sx={{color: "var(--success-color)"}} fontSize="large"/>
                        Dúvidas? Fale com nosso suporte ao cliente.
                    </FooterDiv>
                </DivContent>
            </BodyContent>
            <ModalUpLowGeneric close={()=>setOpenModalContact(false)} open={openModalContact} >
                <ContentModaContact>

                    <HeaderModal>
                        <h3>Fale com a gente!</h3>  
                    </HeaderModal>
                    <BodyModal>
                        <CardContact href="mailto:luacas.martins@cdc.com.br" >
                            <MarkEmailUnreadIcon sx={{fontSize: "2.5rem"}} />
                            <p>E-mail</p>
                        </CardContact>
                        <CardContact href="https://wa.me/5535910018923?text=Gostaria+de+ajuda+" target="blank">
                            <WhatsAppIcon sx={{fontSize: "2.5rem"}} />
                            <p>Whatsapp</p>
                        </CardContact>
                        <CardContact href="tel:5535910018923">
                            <PhoneIcon sx={{fontSize: "2.5rem"}} />
                            <p>Telefone</p>
                        </CardContact>
                    </BodyModal>
    
                </ContentModaContact>
            </ModalUpLowGeneric>
        </Content>
    )
}