import { floatToMoneyReal, formatDate } from "@/utils/masks";
import { ButtonOptions, CardAndOptions, ContentCard, ContentIten, DivContent, DivIconText, DivTitle, OptionsDiv } from "./operationsCard.styled";
import { Dispatch, SetStateAction, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RuleIcon from '@mui/icons-material/Rule';
interface IProps {
    title: string,
    value: number,
    installmentsQuantity: number,
    status: string,
    installmentsDate:string,
    callBack: ()=> void,
    openOptions?: boolean,
    setStep?: Dispatch<SetStateAction<string>>,

}


export function OperationsCards({title, value, installmentsQuantity, status, installmentsDate,  callBack, openOptions=false, setStep }:IProps){ 



    return( 
        <CardAndOptions>

            <ContentCard onClick={()=>callBack() }>
                <DivTitle>
                    <h4>{title}</h4>
                </DivTitle>
                <DivContent>
                    <ContentIten>
                        <p>Valor</p> 
                        <span>{floatToMoneyReal(value)}</span>
                    </ContentIten>
                    <ContentIten>
                        <p>Parcelas</p> 
                        <span>{installmentsQuantity}x de {floatToMoneyReal(value / installmentsQuantity)}</span>
                    </ContentIten>
                    <ContentIten>
                        <p>Status</p> 
                        <span>{status}</span>
                    </ContentIten>
                    <ContentIten>
                        <p>Primeiro vencimento</p> 
                        <span>{formatDate(installmentsDate)}</span>
                    </ContentIten>
                </DivContent>
            </ContentCard>
            {openOptions && (
                <OptionsDiv>
                    <ButtonOptions onClick={()=> {}}><DivIconText> <FileOpenIcon /> Operações</DivIconText> <ArrowForwardIosIcon/></ButtonOptions>
                    <ButtonOptions onClick={() => { setStep && setStep("Installment")}} ><DivIconText> <CalendarMonthIcon/>Parcelas</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                    <ButtonOptions onClick={()=> {setStep && setStep("Status")}}><DivIconText> <RuleIcon/>Status</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                    <ButtonOptions onClick={()=> {}}><DivIconText> <FileOpenIcon/>Documentos</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                </OptionsDiv>
            )}
            
        </CardAndOptions>

    )
}