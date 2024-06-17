import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Content, DivButtons, BodyContent, DivContent, ContentTop, ContentBotton, } from "./PreApprovedSuccess.styled"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TaskAlt from "@mui/icons-material/TaskAlt";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
    setBack: Dispatch<SetStateAction<boolean>>
} 

export const PreApprovedSuccess = ({setStep, setTitle, setBack}:iprops ) => {

    
    useEffect( ( )=> { 
        setBack(false)
        setTitle("Crédito pré-aprovado")
    },[])

    return(
        <Content>
            <BodyContent>
                <DivContent>
                    <ContentTop>
                        <TaskAlt sx={{color: "green", fontSize: "7rem"}}/>
                        <h2>
                            Crédito pré-aprovado com sucesso!
                        </h2>
                    </ContentTop>
                    <ContentBotton>
                        <p>
                            Agora é só aguardar e acompanhar o status do sua solicitação.
                        </p>
                        <span>
                            A pré-aprovação foi baseada nas informações fornecidas e está sujeita a análise de crédito.
                        </span>
                    </ContentBotton>
                </DivContent>
                <DivButtons>
                    <PrimaryButton type="submit" callback={()=> setStep((s)=> s+1)}>Acompanhar status</PrimaryButton>
                </DivButtons>
            </BodyContent>
        </Content>
    )
}