import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, DivTitle, BodyContent, DivInputs, Cards } from "./submitDocumentStep.styled"
import { Card } from "./cardDocument"
import ModalConfirmGeneric from "@/components/_ui/modals/ModalConfirmGeneric"
import ModalPhotoFace from "@/components/_ui/modals/ModalPhotoFace"

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const SubmitDocumentStep = ({setStep, setTitle}:iprops ) => {

    const [ OpenPermissionError , setOpenPermissionError ] = useState(false)
    const [facePhoto, setFacePhoto ] = useState(false)
    
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
                        <Card callback={()=> setOpenPermissionError(true)} title="Frente do documento de Identificação" text="Documento de Identidade (RG) ou Carteira de Habilitação (CNH)" status="Pendente"/>
                        <Card callback={()=> setFacePhoto(true)} title="Foto de rosto" text="Foto de Rosto" status="Enviado"/>
                        <Card callback={()=> setOpenPermissionError(false)} title="Foto com documento" text="Foto com documento de identificação" status="Enviado"/>
                    </Cards>
                </DivInputs>
                <DivButtons>
                    <PrimaryButton type="submit" callback={()=> setStep((s) => s +1)}>Avançar</PrimaryButton>
                </DivButtons>
            </BodyContent>
            <ModalConfirmGeneric callBack={()=>setOpenPermissionError(false)} close={()=>setOpenPermissionError(false)} open={OpenPermissionError} title="Câmera não autorizada" text="Habilite a permissão na tela anterior para envio dos documentos obrigatórios."/>
            <ModalPhotoFace active={facePhoto}  close={()=> setFacePhoto(false)} />
        </Content>
    )
}