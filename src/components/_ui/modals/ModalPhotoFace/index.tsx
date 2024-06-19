import { useEffect, useRef, useState } from "react";
import { ButtonBackImage, ButtonCancel, ButtonPhoto, Content, DivBlur, DivButton, DivImage, PhotoContent, PhotoViewContent, TextsTopCan, TextsTopCanView } from "./ModalPhotoFace.styled";
import { Camera } from "react-camera-pro"
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import PrimaryButton from "../../Buttons/PrimaryButton";

interface IProps{ 
    active: boolean,
    close:()=> void
    titleCan?: string,
    textCan?:string, 
    textView?:string,
    callBack?: ()=> void,
}
 
export default function ModalPhotoFace({active, close, titleCan, textCan, textView, callBack }:IProps){

    const camera = useRef(null);
    const [image, setImage] = useState(undefined);
    const [cameraIsActive, setCameraIsActive ] = useState(true)

    useEffect(()=> {
        if(image){ 
            setCameraIsActive(false)
        }else{ 
            setCameraIsActive(true)
        }
        
    },[image])

    return( 
        <Content active={active} >
            { !image? (
                <PhotoContent>
                    <TextsTopCan>
                        <p>{ titleCan ? titleCan : "Foto do documento de identificação"}</p>
                        <span>{ textCan? textCan : "Enquadre o documento dentro do retângulo."}</span>
                    </TextsTopCan>
                    { active  && cameraIsActive && <Camera  errorMessages={{canvas:"akii"}}  ref={camera} /> }
                    <DivBlur />
                    <ButtonPhoto  onClick={() => setImage(camera?.current?.takePhoto())}><PanoramaFishEyeIcon sx={{fontSize:"3rem"}} /> </ButtonPhoto>
                    <ButtonCancel onClick={()=> close()} >Cancelar</ButtonCancel>
                    <img src={image} alt='Taken photo'/>
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
        </Content>
    )

}