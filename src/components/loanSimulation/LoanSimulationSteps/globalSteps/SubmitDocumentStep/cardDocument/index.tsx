import { BodyCard, CardBody, FooterCard, HeaderCard, PhotoDiv, StatusDiv } from "./cardDocument.styled"
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon       from '@mui/icons-material/Error';
interface IProps{ 
    title: string,
    text: string,
    status: string,
    callback : ()=> void
}

export const Card = ({title, text, status, callback}: IProps) => { 

    return( 
        <CardBody onClick={()=> callback()}>
            <HeaderCard>
                <h3>{title}</h3>
            </HeaderCard>
            <BodyCard>
                <p>
                    {text}
                </p>
            </BodyCard>
            <FooterCard>
                <StatusDiv status={status}>
                     {status === "Pendente"? <ErrorIcon/> : <CheckCircleIcon/>}
                    <p>{status}</p>
                </StatusDiv>
                <PhotoDiv >
                    <PhotoCameraIcon/>
                    <p>Tirar foto</p>
                </PhotoDiv>
            </FooterCard>
        
        </CardBody>
        
    )
}