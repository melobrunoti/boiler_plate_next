import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ButtonBackImage, ButtonCancel, ButtonPhoto, Content, DivBlur, DivButton, DivImage, PhotoContent, PhotoViewContent, TextsTopCan, TextsTopCanView } from "./ModalPhotoFace.styled";
import { Camera } from "react-camera-pro"
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import PrimaryButton from "../../Buttons/PrimaryButton";
import ModalConfirmGeneric from "../ModalConfirmGeneric";

interface IProps{ 
    active: boolean,
    close:()=> void
    titleCan?: string,
    textCan?:string, 
    textView?:string,
    callBack: ()=> void,
    image: string|undefined,
    setImage: Dispatch<SetStateAction<string|undefined>>
}



export default function ModalPhotoFace({active, close, titleCan, textCan, textView, callBack , image, setImage }:IProps){
    
    const camera = useRef(null);
    const [cameraIsActive, setCameraIsActive ] = useState(true)
    const [ OpenPermissionError , setOpenPermissionError ] = useState(false)
    
    async function verificarPermissaoCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        } catch (error) {
            setOpenPermissionError(true)
        }
    }
    
    
    useEffect(()=> {
        verificarPermissaoCamera();
        if(image){ 
            setCameraIsActive(false)
        }else{ 
            setCameraIsActive(true)
        }
    },[image])


    function handlerConfirmError(){ 
        setCameraIsActive(false)
        setOpenPermissionError(false)
        close()
    }
    


    return( 
        <Content active={active} >
            { !image ? (
                <PhotoContent>
                    {!OpenPermissionError && (
                        <>
                            <TextsTopCan>
                                <p>{ titleCan ? titleCan : "Foto do documento de identificação"}</p>
                                <span>{ textCan? textCan : "Enquadre o documento dentro do retângulo."}</span>
                            </TextsTopCan>
                            { active  && cameraIsActive && (<Camera  errorMessages={{permissionDenied:"akii"}}  ref={camera} />) }
                            
                            <DivBlur />
                            <ButtonPhoto  onClick={() => setImage(camera?.current?.takePhoto())}><PanoramaFishEyeIcon sx={{fontSize:"3rem"}} /> </ButtonPhoto>
                            <ButtonCancel onClick={()=> handlerConfirmError()} >Cancelar</ButtonCancel>
                        </>
                    )}                  
                </PhotoContent>
            ):(
                <PhotoViewContent >
                    <TextsTopCanView> 
                        <p>{textView? textView : "Consegue ler todas as informações do documento? Se sim, clique em avançar."}</p>   
                    </TextsTopCanView>
                    <DivImage image={image}>
                    </DivImage>
                    <DivButton>
                        <ButtonBackImage onClick={()=> setImage(undefined)}>Tirar outra foto</ButtonBackImage>
                        <PrimaryButton callback={()=> callBack()}>Avançar</PrimaryButton>
                    </DivButton>
                </PhotoViewContent>
            )}
            <ModalConfirmGeneric callBack={()=>handlerConfirmError()} close={()=>setOpenPermissionError(false)} open={OpenPermissionError} title="Câmera não autorizada" text="Habilite a permissão na tela anterior para envio dos documentos obrigatórios."/>
        </Content>
    )

}