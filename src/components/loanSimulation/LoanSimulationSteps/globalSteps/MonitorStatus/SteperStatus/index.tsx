import { useEffect, useState } from "react"
import { Circle, Content, Texts } from "./SteperStatus.styled"

interface IProps{ 
    final?: boolean,
    StepNumber?: string|number,
    selected?: boolean,
    title?: string, 
    text?: string, 
    status?: "Concluído" | "Pago" | "Contrato Assinado" | "Em análise" | "Aguardando" | "Cancelada" | "Indeferida",

}

export const SteperStatus = ({final=false, StepNumber,  selected=false ,title, text, status}: IProps ) => { 

    const successArray = ["Concluído", "Pago", "Contrato Assinado"]
    const analysisArray = ["Em análise","Aguardando" ]
    const errorArray = ["Cancelada", "Indeferida"]

    const [ atualStatus, setAtualStatus ] = useState("selected" as "success"|"analysis"|"error"|"selected")



    
    useEffect( ()=> { 
        if(successArray.includes(status||"")){
            setAtualStatus("success")
        }
        
        if(analysisArray.includes(status|| "")){ 
            setAtualStatus("analysis")
        }
        
        if(errorArray.includes(status||"")){ 
            setAtualStatus("error")
        }
    },[])          
    
    
    return( 
        <Content final={final} atualStatus={atualStatus} >
            <Circle atualStatus={atualStatus} selected={selected}>
                {StepNumber}
            </Circle>
            <Texts atualStatus={atualStatus} selected={selected}>
                <h3>{title}</h3>
                <p>{text}</p>
                <span>{status}</span>
            </Texts>

        </Content>
    )
}