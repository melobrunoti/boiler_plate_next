import { Dispatch, SetStateAction, useState } from "react";
import { Content, ContractCard, ContractDate, ContractValues, DivContracts } from "./contract.styled";
import { OperationsCards } from "../../OpreationsCard";
import { Box, CircularProgress } from "@mui/material";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { ListContractsQuery, singnatureContractQuery } from "@/api/home/queries";
import { useTokenClientStore } from "@/store/loanSimulation";
import { getDateFronDateHors } from "@/utils/date";
import { SpanDefault, SpanErros, SpanSuccess } from "@/styles/Global.styles";
import ModalContract from "@/components/_ui/modals/ModalContract";


interface IProps { 
    setStep:Dispatch<SetStateAction<string>>,
    setOperation : Dispatch<SetStateAction<Array<any>>>
    operation: Array<any>,
    setTitle: Dispatch<SetStateAction<string>>,
}

export default function ContractStep ({operation, setOperation, setStep, setTitle}:IProps){  
    const [openModalContract, SetOpenModalCobtract ] = useState(false)
    const { token } = useTokenClientStore()
    const { data: contracts, isFetching, refetch: refetchList } = ListContractsQuery(token,  operation[0].hash, openModalContract )



    setTitle("Contratos");
    return( 
        <Content>
            {operation.map((op:any )=> (<OperationsCards key={op.codigoOperacao} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao} callBack={()=>setOperation([op])} installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
            <DivContracts >
                <span>Assinaturas</span>
                {(isFetching)? (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>):
                     contracts?.data?.map(( elen: any)=>{ return(
                        <ContractCard>
                            <ContractValues>
                                <p>{getDateFronDateHors(elen.DTHR_INSERT)}</p>
                                <span>{elen.NOME_DOCUMENTO}</span>
                            </ContractValues>
                            <ContractDate>
                                {elen.FK_STATUS_ASSINATURA == 1 &&  <SpanDefault>{"Em andamento"}</SpanDefault>}
                                {elen.FK_STATUS_ASSINATURA == 2 &&  <SpanSuccess>{"Concluido"}</SpanSuccess>}
                                {elen.FK_STATUS_ASSINATURA == 3 &&  <SpanErros>{"Cancelado"}</SpanErros>}
                            </ContractDate>
                        </ContractCard>
                    )})}
            </DivContracts>

            <PrimaryButton callback={()=>SetOpenModalCobtract(true)} ><PostAddIcon />Assinar novamente</PrimaryButton>
            <ModalContract active={openModalContract} setActive={()=> SetOpenModalCobtract(false)} signatureCallBack={()=> SetOpenModalCobtract(false)} hash={operation[0].hash} />
        </Content>
    )

} 