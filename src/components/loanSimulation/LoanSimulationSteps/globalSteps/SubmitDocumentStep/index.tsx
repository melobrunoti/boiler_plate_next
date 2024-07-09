import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, DivTitle, BodyContent, DivInputs, Cards } from "./submitDocumentStep.styled"
import { Card } from "./cardDocument"
import ModalPhotoFace from "@/components/_ui/modals/ModalPhotoFace"
import ModalUpLowGeneric from "@/components/_ui/modals/ModalUpLowGeneric"
import { ContentModalDocumentSelect } from "./ContentModalDocumentSelect"
import { usePhotoStore, useTokenClientStore } from "@/store/loanSimulation"
import { GetDocumentStatusQuery, SendDocumentQuery } from "@/api/home/queries"
import { Box, CircularProgress } from "@mui/material"

interface iprops { 
    setTitle:Dispatch<SetStateAction<string>>,
    callBack?: ()=> void,
    operation?: Array<object>
    setStep?: Dispatch<SetStateAction<number>>
} 

export const SubmitDocumentStep = ({callBack , setTitle , operation = []}:iprops ) => {

    const [ openSelectDocument, setOpneSelectDocument ] = useState(false)
    const [ openPhotoRG, setOpenPhotoRG ] = useState(false)
    const [ openPhotoRGVerse, setOpenPhotoRGVerse] = useState(false)
    const [ openPhotoCNH, setOpenPhotoCNH ] = useState(false)
    const [ openFaceAndDocument, setOpenFaceAndDocument ] = useState(false)
    const [ openFacePhoto, setOpenFacePhoto ] = useState(false)

    const {PhotoStore}= usePhotoStore()
    const [ ducumentStatus, setDocumentStatus ] = useState(false)
    const [ faceAndDocumentStatus , setFaceAndDocumentStatus ] = useState(false)
    const [ faceStatus ,  setFaceStatus ] = useState(false)
    const [ BodyRequest,  setBodyRequst ] = useState(undefined as undefined | string)

    function handlePhotoRG(){ 
        setOpenPhotoRG(false)
        setOpenPhotoRGVerse(true)
        setBodyRequst( JSON.stringify({ type_doc: 1, extension_doc: 2, base64:PhotoStore.photoRG?.split(",")[1]}))
    }
    
    function handlePhotoRGVerse( ){ 
        setBodyRequst( JSON.stringify({ type_doc: 2, extension_doc: 2, base64:PhotoStore.photoRGVerse?.split(",")[1]}))
        setOpenPhotoRGVerse(false)
        setOpneSelectDocument(false)
    }

    function handlePhotoCNH( ){ 
        setBodyRequst( JSON.stringify({ type_doc: 3, extension_doc: 2, base64:PhotoStore.photoRGVerse?.split(",")[1]}))
        setOpenPhotoCNH(false)
        setOpneSelectDocument(false)
    }

    function handlePhotoFace( ){ 
        setBodyRequst( JSON.stringify({ type_doc: 7, extension_doc: 2, base64:PhotoStore.facePhoto?.split(",")[1]}))
        setOpenFacePhoto(false)
        setOpneSelectDocument(false)
    }

    function handlePhotoFaceAndDocument( ){ 
        setBodyRequst( JSON.stringify({ type_doc: 10, extension_doc: 2, base64:PhotoStore.faceAndDocument?.split(",")[1]}))
        setOpenFaceAndDocument(false)
        setOpneSelectDocument(false)
    }
    

    const {token} = useTokenClientStore()

    const {data, isFetching} =  GetDocumentStatusQuery(token, operation[0]?.hash )  

    


    useEffect(()=> { 
        if(data?.data?.find((elem:any)=> elem.type == 1 ) || data?.data?.find((elem:any)=> elem.type == 2 ) || data?.data?.find((elem:any)=> elem.type == 3 ) || data?.data?.find((elem:any)=> elem.type == 4 )){ 
            setDocumentStatus( true )
        }

        if(callBack && ( PhotoStore.photoRG || PhotoStore.photoRGVerse || PhotoStore.photoCNH ) ){ 
            setDocumentStatus( true )
        }

        if(data?.data?.find((elem:any)=> elem.type == 7 )){ 
            setFaceStatus(true)
        }
        
        if(callBack && PhotoStore.facePhoto ){ 
            setFaceStatus( true )
        }

        if(data?.data?.find((elem: any)=> elem.type == 10 )){ 
            setFaceAndDocumentStatus(true)
        }

        if(callBack && PhotoStore.faceAndDocument ){ 
            setFaceAndDocumentStatus(true)
        }
    },[data, PhotoStore.faceAndDocument, PhotoStore.facePhoto, PhotoStore.photoRG, PhotoStore.photoRGVerse , PhotoStore.photoCNH ])
    
    
    useEffect( ( )=> { 
        setTitle("Documentos")
    },[])

    function handleOpenPhotoDocument  ( ){ 
        
        setOpneSelectDocument(true)
    }

    function handleOpenPhotoFace( ){ 
        setOpenFacePhoto(true)
    }

    function handleOpenPhotoFaceAndDocument( ){ 
        setOpenFaceAndDocument(true)
    }


    return(
        <Content>
            <DivTitle>
                <h2>Para finalizar, envie os documentos solicitados abaixo</h2>   
                <span>Quando for bater a foto, lembre-se de estar em um ambiente bem iluminado, mantenha o foco no documento e evite movimentos bruscos.</span>
            </DivTitle>
            <BodyContent>
                <DivInputs>
                    <Cards>
                        {isFetching ? 
                        (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)
                        :(<>
                            <Card callback={()=> setOpneSelectDocument(true)} title="Frente do documento de Identificação" text="Documento de Identidade (RG) ou Carteira de Habilitação (CNH)" status={ducumentStatus ?"Enviado":"Pendente"}/>
                            <Card callback={()=> setOpenFacePhoto(true)} title="Foto de rosto" text="Foto de Rosto" status={faceStatus ?"Enviado":"Pendente"}/>
                            <Card callback={()=> setOpenFaceAndDocument(true)} title="Foto com documento" text="Foto com documento de identificação" status={faceAndDocumentStatus ? "Enviado":"Pendente"}/>
                        </>)
                        }
                    </Cards>
                </DivInputs>
                <DivButtons>
                    {callBack &&<PrimaryButton disabled={!ducumentStatus || !faceStatus || !faceAndDocumentStatus } type="submit" callback={()=>  callBack() }>Avançar</PrimaryButton>}
                </DivButtons>
            </BodyContent>
            <ModalUpLowGeneric open={openSelectDocument} close={()=> setOpneSelectDocument(false)} >
                <ContentModalDocumentSelect openRG={()=>setOpenPhotoRG(true)} openRGNewModel={()=>setOpenPhotoRG(true)} openCNH={()=> setOpenPhotoCNH(true)} /> 
            </ModalUpLowGeneric>
            

            { openPhotoRG  && <ModalPhotoFace setImageKey={"photoRG"} image={PhotoStore.photoRG} active={openPhotoRG}  titleCan="Foto da FRENTE do documento de identificação (RG)" textCan="Enquadre o documento dentro do retângulo." close={()=> setOpenPhotoRG(false)}  callBack={()=> handlePhotoRG()} />}
            { openPhotoRGVerse && <ModalPhotoFace setImageKey={"photoRGVerse"} image={PhotoStore.photoRGVerse} active={openPhotoRGVerse} titleCan="Foto do VERSO do documento de identificação (RG)"  textCan="Enquadre o documento dentro do retângulo." close={()=> setOpenPhotoRGVerse(false)}  callBack={()=> handlePhotoRGVerse() }/>}
            { openPhotoCNH && <ModalPhotoFace setImageKey={"photoCNH"} image={PhotoStore.photoCNH} active={openPhotoCNH} titleCan="Foto do documento de identificação (CNH) aberta"  textCan="Enquadre o documento dentro do retângulo." close={()=> setOpenPhotoCNH(false)} callBack={()=> handlePhotoCNH() } />}
            { openFaceAndDocument && <ModalPhotoFace setImageKey={"faceAndDocument"} image={PhotoStore.faceAndDocument} active={openFaceAndDocument} titleCan="Foto do rosto com documento"  textCan="Enquadre o rosto dentro do retângulo." close={()=> setOpenFaceAndDocument(false)} callBack={()=> handlePhotoFaceAndDocument() } />}
            { openFacePhoto && <ModalPhotoFace setImageKey={"facePhoto"} image={PhotoStore.facePhoto} active={openFacePhoto} titleCan="Foto do rosto"  textCan="Enquadre o rosto dentro do retângulo." close={()=> setOpenFacePhoto(false)}  callBack={()=> handlePhotoFace() } />}                
        </Content>
    )
}