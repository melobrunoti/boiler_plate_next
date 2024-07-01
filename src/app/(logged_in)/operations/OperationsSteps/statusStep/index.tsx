import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, BodyContent, DivContent, FooterDiv, ContentModaContact, HeaderModal, BodyModal, CardContact } from "./MonitorStatus.styled"
import { SteperStatus } from "./SteperStatus";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ModalUpLowGeneric from "@/components/_ui/modals/ModalUpLowGeneric";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { GetStatusOperationQuery } from "@/api/home/queries";
import { db } from "@/db/db.model";
import { Box, CircularProgress } from "@mui/material";



interface iprops { 
    setStep:Dispatch<SetStateAction<string>>,
    setTitle:Dispatch<SetStateAction<string>>,
    operation: Array<any>,
} 

export const StatusSteps = ({operation,setStep, setTitle}:iprops ) => {

    const [openModalContact, setOpenModalContact] = useState(false as boolean);
    const [statusStep , setStatus ] = useState( 1 as number)


    function modalContact( ){ 
        setOpenModalContact(true)
    }

    setTitle("Parcelas");
    const [userToken, setUserToken ] = useState(undefined as undefined|string)
    db.AuthTable.get(1).then((obj)=> setUserToken(obj?.token))

    const {data, isLoading} = GetStatusOperationQuery(userToken!, JSON.stringify({code_operation: operation[0].codigoOperacao}))

    useEffect( ()=> { 
        if(data?.data[0]){ 
            switch (data?.data[0]?.DESCRICAO) {
                case "EM ANÁLISE" : 
                    setStatus(1)
                    break;
                case "DIGITANDO" :
                    setStatus(2) 
                    break;
                case "AG.ASSINATURA" :
                    setStatus(3) 
                    break;
                case "AG.APROVAÇÃO" :
                    setStatus(4) 
                    break;
                case "PAGO" :
                    setStatus(5) 
                    break;  
                default:
                    break;
            }
        }
    },[data])

    // console.log(statusStep)
    // console.log(statusStep > 1 ? "Concluído" : "Aguardando")
    // console.log(statusStep > 2 ? "Concluído" : "Aguardando")
    // console.log(statusStep > 3 ? "Concluído" : "Aguardando")
    
    return(
        <Content>
            <BodyContent>
                <DivContent>
                    {isLoading && (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)}
                    { data?.data[0]?.DESCRICAO && 
                        <div>
                            <SteperStatus title="Solicitação de empréstimo" text="Enviado"          selected={statusStep == 1} status={statusStep > 1 ? "Concluído" : "Aguardando"} StepNumber={1}/> 
                            <SteperStatus title="Documentos" text="Enviado"                         selected={statusStep == 2} status={statusStep > 2 ? "Concluído" : "Aguardando"} StepNumber={2}/> 
                            <SteperStatus title="Contrato" text="Assinatura do contrato"            selected={statusStep == 3} status={statusStep > 3 ? "Concluído" : "Aguardando"} StepNumber={3}/> 
                            <SteperStatus title="Análise contrato" text="Assinatura do contrato"    selected={statusStep == 4} status={statusStep > 4 ? "Concluído" : "Aguardando"} StepNumber={4}/> 
                            <SteperStatus title="Conclusão" text="Pagamento de crédito"             selected={statusStep == 5} status={statusStep > 5 ? "Concluído" : "Aguardando"} StepNumber={5} final={true} /> 
                        </div>

                    }
                   <DivButtons>
                   { statusStep == 3 && 
                        <PrimaryButton type="submit" callback={()=>{}}>Assinar contrato</PrimaryButton>
                   }
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