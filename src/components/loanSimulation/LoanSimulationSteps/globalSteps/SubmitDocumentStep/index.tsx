import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, DivTitle, BodyContent, DivInputs, Cards } from "./submitDocumentStep.styled"
import { Card } from "./cardDocument"
import ModalConfirmGeneric from "@/components/_ui/modals/ModalConfirmGeneric"
import ModalPhotoFace from "@/components/_ui/modals/ModalPhotoFace"
import ModalUpLowGeneric from "@/components/_ui/modals/ModalUpLowGeneric"
import { ContentModalDocumentSelect } from "./ContentModalDocumentSelect"

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const SubmitDocumentStep = ({setStep, setTitle}:iprops ) => {

    const [ OpenPermissionError , setOpenPermissionError ] = useState(false)
    const [ photoRG, setPhotoRG ] = useState(false)
    const [ photoRGVerse, setPhotoRGVerse] = useState(false)
    const [ photoCNH, setPhotoCNH ] = useState(false)
    const [ faceAndDocument, setFaceAndDocument ] = useState(false)
    const [ facePhoto, setFacePhoto ] = useState(false)
    const [ openSelectDocument, setOpneSelectDocument ] = useState(false)

    function handlePhotoRG(){ 

    }
    
    useEffect( ( )=> { 
        setTitle("Documentos")
    },[])

    return(
        <Content>
            <DivTitle>
                <h2>Para finalizar, envie os documentos solicitados abaixo</h2>   
                <span>Quando for bater a foto, lembre-se de estar em um ambiente bem iluminado, mantenha o foco no documento e evite movimentos bruscos.</span>
            </DivTitle>
            <BodyContent>
                <DivInputs>
                    <Cards>
                        <Card callback={()=> setOpneSelectDocument(true)} title="Frente do documento de Identificação" text="Documento de Identidade (RG) ou Carteira de Habilitação (CNH)" status="Enviado"/>
                        <Card callback={()=> setFacePhoto(true)} title="Foto de rosto" text="Foto de Rosto" status="Pendente"/>
                        <Card callback={()=> setFaceAndDocument(false)} title="Foto com documento" text="Foto com documento de identificação" status="Enviado"/>
                    </Cards>
                </DivInputs>
                <DivButtons>
                    <PrimaryButton type="submit" callback={()=> setStep((s) => s +1)}>Avançar</PrimaryButton>
                </DivButtons>
            </BodyContent>
            <ModalUpLowGeneric open={openSelectDocument} close={()=> setOpneSelectDocument(false)} >
                <ContentModalDocumentSelect openRG={()=>setPhotoRG(true)} openRGNewModel={()=>setPhotoRG(true)} openCNH={()=> setPhotoCNH(true)} /> 
            </ModalUpLowGeneric>
            <ModalConfirmGeneric callBack={()=>setOpenPermissionError(false)} close={()=>setOpenPermissionError(false)} open={OpenPermissionError} title="Câmera não autorizada" text="Habilite a permissão na tela anterior para envio dos documentos obrigatórios."/>

            { photoRG && <ModalPhotoFace active={photoRG} titleCan="Foto da FRENTE do documento de identificação (RG)" textCan="Enquadre o documento dentro do retângulo." close={()=> setPhotoRG(false)}  callBack={()=> handlePhotoRG()} />}
            { photoRGVerse && <ModalPhotoFace active={photoRGVerse} titleCan="Foto do VERSO do documento de identificação (RG)" textCan="Enquadre o documento dentro do retângulo." close={()=> setPhotoRGVerse(false)}  />}
                
        </Content>
    )
}