import { Dispatch, SetStateAction } from "react";
import { HeaderContent, Content, BodyContent, ButtonChoice} from "./ContentModalDocumentSelect.styled";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface IProps{ 
    openRG: ()=>void,
    openRGNewModel: ()=> void, 
    openCNH: ()=> void, 
}

export function ContentModalDocumentSelect({openRG, openRGNewModel, openCNH}:IProps){ 

    return( 
        <Content>
            <HeaderContent>
                <h4>Documento de identificação</h4>
                <p>Selecione qual documento será enviado</p>
            </HeaderContent>
            <BodyContent>
                <ButtonChoice onClick={()=> openRG()}>
                    Carteira de Identidade (RG) <ArrowForwardIosIcon sx={{ fontSize:"0.75rem"}} />
                </ButtonChoice>
                <ButtonChoice onClick={()=>openRGNewModel()}>
                    NOVO MODELO C. de Identidade (RG) <ArrowForwardIosIcon sx={{ fontSize:"0.75rem"}} /> 
                </ButtonChoice>
                <ButtonChoice onClick={()=> openCNH()}>
                    Carteira de Motorista (CNH) <ArrowForwardIosIcon sx={{ fontSize:"0.75rem"}} /> 
                </ButtonChoice>
            </BodyContent>
        </Content>
    )
}