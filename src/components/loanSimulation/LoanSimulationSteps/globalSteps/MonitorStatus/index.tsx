import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, BodyContent, DivContent, FooterDiv } from "./MonitorStatus.styled"
import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material"
import { SteperStatus } from "./SteperStatus";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const steps = [
    {
      label: 'Solicitação de empréstimo',
      description: `Enviado`,

    },
    {
      label: 'Documentos',
      description:'Enviado',
    },
    {
      label: 'Contrato',
      description: `Assinatura do contrato`,
    },
    {
        label: "Conclusão",
        description: "Pagamento de crédito"

    }
  ];

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
    setBack: Dispatch<SetStateAction<boolean>>,
    setStepInfo: Dispatch<SetStateAction<boolean>>
} 

export const MonitorStatus = ({setStep, setTitle, setBack, setStepInfo}:iprops ) => {

    const [activeStep, setActiveStep] = useState(0);
    
    useEffect( ( )=> { 
        setStepInfo( false)
        setBack(false)
        setTitle("Status")
    },[])

    function modalContact( ){ 
        
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
                    <FooterDiv onClick={()=> modalContact()}>
                        <ContactSupportIcon  sx={{color: "var(--success-color)"}} fontSize="large"/>
                        Dúvidas? Fale com nosso suporte ao cliente.
                    </FooterDiv>
                </DivContent>
                <DivButtons>

                    <PrimaryButton type="submit" callback={()=> setStep((s)=> s+1)}>Sair</PrimaryButton>
                </DivButtons>
            </BodyContent>
        </Content>
    )
}