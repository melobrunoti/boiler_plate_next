import { Dispatch, SetStateAction, useState } from "react";
import { OperationsCards } from "../../OpreationsCard";
import { CardsContent, Content, ContentTitle } from "./operationsSteps1.styles";
import { db } from "@/db/db.model";
import { GetOperationsQuery } from "@/api/home/queries";
import { selectClasses } from "@mui/material";


interface IProps { 
    step: string,
    setStep:Dispatch<SetStateAction<string>>,
    setOperation : Dispatch<SetStateAction<Array<any>>>
    operation: Array<any>,
    
}


export function OperationSteps1({step, setStep, setOperation, operation }:IProps){ 

    const [userToken, setUserToken ] = useState("" as string | undefined); 
    //const [selectedElement, setSelectedElement] = useState([] as array)
    db.AuthTable.get(1).then((obj)=> setUserToken(obj?.token))



    const { data, isFetching, } = GetOperationsQuery(userToken!)

    return( 
        <Content>
            <ContentTitle>
                <h2>{data?.data?.length} Operações</h2>
            </ContentTitle>
            <CardsContent>
                {operation.map((op:any)=> (<OperationsCards setStep={setStep} key={op.codigoOperacao} openOptions={true} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao} callBack={()=>setOperation([])} installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
                {data?.data && operation.length == 0 && data?.data?.map((op:any )=> (<OperationsCards  key={op.codigoOperacao} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao} callBack={()=>setOperation([op])} installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
            </CardsContent>
        </Content>
    )
}