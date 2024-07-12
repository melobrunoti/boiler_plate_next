import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, BodyContent, DivContent, FooterDiv, ContentModaContact, HeaderModal, BodyModal, CardContact } from "./MonitorStatus.styled"
import { SteperStatus } from "./SteperStatus";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ModalUpLowGeneric from "@/components/_ui/modals/ModalUpLowGeneric";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { GetAllStatusOfOperationQuery, GetStatusOperationQuery } from "@/api/home/queries";
import { db } from "@/db/db.model";
import { Box, CircularProgress } from "@mui/material";
import { useTokenClientStore } from "@/store/loanSimulation";

interface iprops { 
    setStep:Dispatch<SetStateAction<string>>,
    setTitle:Dispatch<SetStateAction<string>>,
    operation: Array<any>,
} 

export const StatusSteps = ({operation, setStep, setTitle}:iprops ) => {

    const [openModalContact, setOpenModalContact] = useState(false as boolean);
    const [statusStep , setStatus ] = useState( 1 as number)


    function modalContact( ){ 
        setOpenModalContact(true)
    }
    setTitle("Parcelas");
    const [userToken, setUserToken ] = useState(undefined as undefined|string)
    db.AuthTable.get(1).then((obj)=> setUserToken(obj?.token))

    const  { token } = useTokenClientStore()

    const {data: allStatus , isLoading } =  GetAllStatusOfOperationQuery( token )
    const {data, isFetching} = GetStatusOperationQuery(userToken!, JSON.stringify({code_operation: operation[0].codigoOperacao}))
 
    useEffect( ()=> { 
        if(data?.data){ 
            switch (data?.data?.FK_CODSTATUS_ATUAL) {
                case "1" : 
                    setStatus(1)
                    break;
                case "4" :
                    setStatus(2) 
                    break;
                case "11":
                    setStatus(3) 
                    break;
                case "13":
                    setStatus(4) 
                    break;
                case  "7":
                    setStatus(5) 
                    break;  
                case  "5":
                    setStatus(6)
                    break;
                default  :
                    setStatus(1)
                    break;
            }
        }
    },[data])

    function renderStatusText  (idStatus?: number, text?: string){ 

        return  statusStep === 6 ? (text? text : allStatus?.data?.find((elen:any)=> elen.ID == idStatus)?.AUTO_CONTRATACAO_DESCRICAO ): allStatus?.data?.find((elen:any)=> elen.ID == 5)?.AUTO_CONTRATACAO_DESCRICAO  
    }
    
    return(
        <Content>
            <BodyContent>
                <DivContent>
                    {(isFetching || isLoading ) && (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)}
                    { data?.data?.DESCRICAO && !isFetching && 
                        <div>
                            <SteperStatus title={ renderStatusText(1,"Solicitação de empréstimo") } text="Enviado" selected={false} status={ statusStep == 6 ? "Cancelada": "Concluído"} StepNumber={1}/> 
                            <SteperStatus title={renderStatusText(13)} text="Enviado" selected={statusStep <= 2} status={statusStep > 2 && statusStep != 6 ? "Concluído" : statusStep === 6 ? "Cancelada" : "Aguardando"} StepNumber={2}/> 
                            <SteperStatus title={renderStatusText(11)} text="Assinatura do contrato" selected={statusStep == 3} status={statusStep > 3 && statusStep != 6 ? "Concluído" : statusStep === 6 ? "Cancelada" : "Aguardando"} StepNumber={3}/> 
                            <SteperStatus title={renderStatusText(4,"Análise do contrato")} text="Assinatura do contrato"  selected={false} status={statusStep >= 4 && statusStep != 6 ? "Concluído" : statusStep === 6 ? "Cancelada" : "Aguardando"} StepNumber={4}/> 
                            <SteperStatus title={renderStatusText(7)} text="Pagamento de crédito" selected={statusStep == 4} status={statusStep === 5 ? "Concluído" : statusStep === 6 ? "Cancelada" : "Aguardando"} StepNumber={5} final={true} /> 
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