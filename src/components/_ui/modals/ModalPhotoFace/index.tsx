import { useEffect, useRef, useState } from "react";
import { ButtonCancel, ButtonPhoto, Content, DivBlur, PhotoContent } from "./ModalPhotoFace.styled";
import { Camera } from "react-camera-pro"
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

interface IProps{ 
    active: boolean,
    close:()=> void
}

export default function ModalPhotoFace({active, close}:IProps){ 

    const camera = useRef(null);
    const [image, setImage] = useState(undefined);

    


    return( 
        <Content active={active}>
            <PhotoContent>
                { active  && <Camera  errorMessages={{canvas:"akii"}}  ref={camera} /> }
                <DivBlur />
                <ButtonPhoto  onClick={() => setImage(camera?.current.takePhoto())}><PanoramaFishEyeIcon sx={{fontSize:"3rem"}} /> </ButtonPhoto>
                <ButtonCancel onClick={()=> close() } >Cancelar</ButtonCancel>
                <img src={image} alt='Taken photo'/>
            </PhotoContent>
        </Content>
    )

}