import { floatToMoneyReal, formatDate } from "@/utils/masks";
import { ContentCard, ContentIten, DivContent, DivTitle } from "./operationsCard.styled";
interface IProps {
    title: string,
    value: number,
    installmentsQuantity: number,
    status: string,
    installmentsDate:string,
    callBack: ()=> void,
}

export function OperationsCards({title, value, installmentsQuantity, status, installmentsDate, callBack }:IProps){ 




    return( 
        <ContentCard onClick={()=> callBack()}>
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
    )
}