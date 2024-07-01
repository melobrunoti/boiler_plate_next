import { Dispatch, SetStateAction, useState } from "react";
import { OperationsCards } from "../../OpreationsCard";
import { CardsContent, Content, ContentTitle } from "./operationsSteps1.styles";
import { db } from "@/db/db.model";
import { GetOperationsQuery } from "@/api/home/queries";
import { Box, CircularProgress, selectClasses } from "@mui/material";


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



    const { data, isLoading, } = GetOperationsQuery(userToken!)

    return( 
        <Content>
            <ContentTitle>
                <h2>{data?.data?.length} Operações</h2>
            </ContentTitle>
            <CardsContent>
                {isLoading && (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)}
                {operation.map((op:any)=> (<OperationsCards  setStep={setStep} key={op.codigoOperacao} openOptions={true} hash={op.hash} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao} callBack={()=>setOperation([])} installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
                {data?.data && operation.length == 0 && data?.data?.map((op:any )=> (<OperationsCards  key={op.codigoOperacao} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao} callBack={()=>setOperation([op])} installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
            </CardsContent>
        </Content>
    )
}