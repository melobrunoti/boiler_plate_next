import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Content, DivButtons, DivTitle, BodyContent, DivInputs, Cards } from "./submitDocumentStep.styled"
import { Card } from "./cardDocument"

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const SubmitDocumentStep = ({setStep, setTitle}:iprops ) => {
    
    useEffect( ( )=> { 
        setTitle("Documentos")
    },[])

    return(
        <Content>
            <DivTitle>
                <h2>Para finalizar, envie os documentos solicitados abaixo</h2>   
                <span>Quando for bater a foto, lembre-se de estar em um ambiente bem iluminado, mantenha o foco no documento e evite movimentos bruscos.</span>
            </DivTitle>
            <BodyContent >
                <DivInputs>
                    <Cards>
                        <Card title="Frente do documento de Identificação" text="Documento de Identidade (RG) ou Carteira de Habilitação (CNH)" status="Pendente"/>
                        <Card title="Foto de rosto" text="Foto de Rosto" status="Enviado"/>
                        <Card title="Foto com documento" text="Foto com documento de identificação" status="Enviado"/>
                    </Cards>
                </DivInputs>
                
                <DivButtons>
                    <PrimaryButton type="submit" callback={()=> setStep((s) => s +1)}>Avançar</PrimaryButton>
                </DivButtons>
            </BodyContent>
        </Content>
    )
}