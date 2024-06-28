import { Dispatch, SetStateAction, useState } from "react";
import { Content, InstallmentCard, InstallmentDate, InstallmentValues } from "./installments.styles";
import { OperationsCards } from "../../OpreationsCard";
import { GetInstallmentsQuery } from "@/api/home/queries";
import { db } from "@/db/db.model";
import { floatToMoneyReal, formatDate } from "@/utils/masks";
import { Box, CircularProgress } from "@mui/material";

interface IProps { 
    setStep:Dispatch<SetStateAction<string>>,
    setOperation : Dispatch<SetStateAction<Array<any>>>
    operation: Array<any>,
    setTitle: Dispatch<SetStateAction<string>>,
}

export default function InstallmentsStep ({operation, setOperation, setStep, setTitle}:IProps){ 

    setTitle("Parcelas");
    const [userToken, setUserToken ] = useState(undefined as undefined|string)
    db.AuthTable.get(1).then((obj)=> setUserToken(obj?.token))


    const {data, isLoading} = GetInstallmentsQuery(userToken!, JSON.stringify({code_operation: operation[0].codigoOperacao}))

    return( 
        <Content>
            {operation.map((op:any )=> (<OperationsCards  key={op.codigoOperacao} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao} callBack={()=>setOperation([op])} installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
            {isLoading && (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)}
            { data?.data && data?.data?.map((ins:any) =>
                (<InstallmentCard>
                    <InstallmentValues>
                        <p>{ins.NDOC}/{data?.data?.length}</p>
                        <span>{floatToMoneyReal(ins.VL_FACE)}</span>
                    </InstallmentValues>
                    <InstallmentDate>
                        <span>{ !ins.DTHRBAIXA?"Pago":"A vencer"}</span>
                        <span>{ins.DTHRBAIXA ? formatDate(ins.DTHRBAIXA) : formatDate(ins.VENCIMENTO)}</span>
                    </InstallmentDate>
                </InstallmentCard>))
            }
        </Content>
    )
}