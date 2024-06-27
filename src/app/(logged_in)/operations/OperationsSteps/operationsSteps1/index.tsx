import { Dispatch, SetStateAction, useState } from "react";
import { OperationsCards } from "../../OpreationsCard";
import { CardsContent, Content, ContentTitle } from "./operationsSteps1.styles";
import { db } from "@/db/db.model";
import { GetOperationsQuery } from "@/api/home/queries";


interface IProps { 
    step: string,
    setStep:Dispatch<SetStateAction<string>>,
    setOperation : Dispatch<SetStateAction<any>>
}


export function OperationSteps1({step, setStep, setOperation,}:IProps){ 

    const [userToken, setUserToken ] = useState("" as string | undefined); 
    db.AuthTable.get(1).then((obj)=> setUserToken(obj?.token))

    const { data, isFetching, } = GetOperationsQuery(userToken!)

    function transactionsDetails ( op:any){ 
        setOperation(op)
        setStep("detail")
    } 

    return( 
        <Content>
            <ContentTitle>
                <h2>{data?.data?.length} Operações</h2>
            </ContentTitle>
            <CardsContent>
            {data?.data && data?.data?.map((op:any )=> (<OperationsCards  key={op.codigoOperacao} callBack={()=> transactionsDetails(op)} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao}  installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
            </CardsContent>
        </Content>
    )
}