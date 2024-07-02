import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, DivTitle, BodyContent, DivInputs, Cards } from "./submitDocumentStep.styled"
import { Card } from "./cardDocument"
import ModalPhotoFace from "@/components/_ui/modals/ModalPhotoFace"
import ModalUpLowGeneric from "@/components/_ui/modals/ModalUpLowGeneric"
import { ContentModalDocumentSelect } from "./ContentModalDocumentSelect"
import { useTokenClientStore } from "@/store/loanSimulation"
import { GetDocumentStatusQuery, SendDocumentQuery } from "@/api/home/queries"
import { Box, CircularProgress } from "@mui/material"
import { object } from "zod"

interface iprops { 
    setTitle:Dispatch<SetStateAction<string>>,
    callBack?: ()=> void,
    operation?: Array<object>
} 

export const SubmitDocumentStep = ({callBack , setTitle , operation}:iprops ) => {

    const [ openSelectDocument, setOpneSelectDocument ] = useState(false)
    const [ openPhotoRG, setOpenPhotoRG ] = useState(false)
    const [ openPhotoRGVerse, setOpenPhotoRGVerse] = useState(false)
    const [ openPhotoCNH, setOpenPhotoCNH ] = useState(false)
    const [ openFaceAndDocument, setOpenFaceAndDocument ] = useState(false)
    const [ openFacePhoto, setOpenFacePhoto ] = useState(false)
    const [ photoRG, setPhotoRG ] = useState(undefined as string|undefined)
    const [ photoRGVerse, setPhotoRGVerse] = useState(undefined as string|undefined)
    const [ photoCNH, setPhotoCNH ] = useState(undefined as string|undefined)
    const [ faceAndDocument, setFaceAndDocument ] = useState(undefined as string|undefined)
    const [ facePhoto, setFacePhoto ] = useState(undefined as string|undefined)
    const [ ducumentStatus, setDocumentStatus ] = useState(false)
    const [ faceAndDocumentStatus , setFaceAndDocumentStatus ] = useState(false)
    const [ faceStatus ,  setFaceStatus ] = useState(undefined as undefined | object)
    const [ BodyRequest,  setBodyRequst ] = useState(undefined as undefined | object)

    function handlePhotoRG(){ 

        setOpenPhotoRG(false)
        setOpenPhotoRGVerse(true)
        
    }

    function handlePhotoCNH( ){ 

    }

    function handlePhotoRGVerse( ){ 

    }

    

    const {token} = useTokenClientStore()

    const {data, isFetching} =  GetDocumentStatusQuery(token, operation[0]?.hash )  
    const bodyRequest  = { photoRG, photoCNH   }
    const {data: sendData } =  SendDocumentQuery(token, operation[0]?.hash, BodyRequest  )


    useEffect(()=> { 
        if(data?.return){ 
            setDocumentStatus( true )
        }
        if(photoRG) { 
            setBodyRequst({ type_doc: 1, extension_doc: 1, base64:photoRG })
        }
        if(photoCNH){ 
            setBodyRequst({ type_doc: 2, extension_doc: 2, base64:photoCNH })
        }

    },[data, photoRG, photoCNH ])

    
    
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
                        {isFetching ? 
                        (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)
                        :(<>
                            <Card callback={()=> !ducumentStatus && setOpneSelectDocument(true)} title="Frente do documento de Identificação" text="Documento de Identidade (RG) ou Carteira de Habilitação (CNH)" status={ducumentStatus ?"Enviado":"Pendente"}/>
                            <Card callback={()=> !faceStatus && setOpenFacePhoto(true)} title="Foto de rosto" text="Foto de Rosto" status={faceStatus ?"Enviado":"Pendente"}/>
                            <Card callback={()=> !faceAndDocumentStatus && setOpenFaceAndDocument(true)} title="Foto com documento" text="Foto com documento de identificação" status={faceAndDocumentStatus ?"Enviado":"Pendente"}/>
                        </>)
                        }
                    </Cards>
                </DivInputs>
                <DivButtons>
                    <PrimaryButton type="submit" callback={()=> callBack && callBack()    }>Avançar</PrimaryButton>
                </DivButtons>
            </BodyContent>
            <ModalUpLowGeneric open={openSelectDocument} close={()=> setOpneSelectDocument(false)} >
                <ContentModalDocumentSelect openRG={()=>setOpenPhotoRG(true)} openRGNewModel={()=>setOpenPhotoRG(true)} openCNH={()=> setOpenPhotoCNH(true)} /> 
            </ModalUpLowGeneric>
            

            { openPhotoRG  && <ModalPhotoFace setImage={setPhotoRG} image={photoRG} active={openPhotoRG}  titleCan="Foto da FRENTE do documento de identificação (RG)" textCan="Enquadre o documento dentro do retângulo." close={()=> setOpenPhotoRG(false)}  callBack={()=> handlePhotoRG()} />}
            { photoRGVerse && <ModalPhotoFace setImage={setPhotoRGVerse} image={photoRGVerse} active={openPhotoRGVerse} titleCan="Foto do VERSO do documento de identificação (RG)"  textCan="Enquadre o documento dentro do retângulo." close={()=> setOpenPhotoRGVerse(false)}  callBack={()=> setOpenPhotoRGVerse(false) }/>}
            { openPhotoCNH && <ModalPhotoFace setImage={setPhotoCNH} image={photoCNH} active={openPhotoCNH} titleCan="Foto do documento de identificação (CNH) aberta"  textCan="Enquadre o documento dentro do retângulo." close={()=> setOpenPhotoCNH(false)} callBack={()=> setOpenPhotoRGVerse(false) } />}
            { openFaceAndDocument && <ModalPhotoFace setImage={setFaceAndDocument} image={faceAndDocument} active={openFaceAndDocument} titleCan="Foto do rosto com documento"  textCan="Enquadre o rosto dentro do retângulo." close={()=> setOpenFaceAndDocument(false)} callBack={()=> setOpenPhotoRGVerse(false) } />}
            { openFacePhoto && <ModalPhotoFace setImage={setFacePhoto} image={facePhoto} active={openFacePhoto} titleCan="Foto do rosto"  textCan="Enquadre o rosto dentro do retângulo." close={()=> setOpenFacePhoto(false)}  callBack={()=> setOpenPhotoRGVerse(false) } />}                
        </Content>
    )
}