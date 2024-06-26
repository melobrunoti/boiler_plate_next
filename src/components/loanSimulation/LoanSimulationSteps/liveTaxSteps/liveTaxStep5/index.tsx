import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BodyStep5, CardInstallment, ContentLiveTaxStep5, HeaderStep5, TotalAmountDiv } from "./liveTaxStep5.styled"
import HeaderSteps from "../../headerSteps"
import { useLoanSimulationResponseStore, useLoanSimulationStore, useSelectedInstallmentStore, useTokenClientStore } from "@/store/loanSimulation";
import { format } from "path";
import { loggedFetchConteiner } from "@/api/config";
import { NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import { removeCpfCnpjMask } from "@/utils/masks";
import { Box, CircularProgress } from "@mui/material";
import { GetLoanInstallmentsQuery, getPurchaseCodeQery } from "@/api/loanSimulation/queries";
import { addDaysToAtualDate } from "@/utils/date";
import { ISimulation } from "@/store/loanSimulation/types";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep5 = ({setStep, setTitle}:iprops )=> {

    const { formData} = useLoanSimulationStore();
    const { loanType } = useLoanSimulationResponseStore();
    const {setInstallment}= useSelectedInstallmentStore( )


    const atualDate = addDaysToAtualDate(0)
    const atualDate30 = addDaysToAtualDate(30)
    
    
    const { token } = useTokenClientStore()
    
    const {data, isLoading }= getPurchaseCodeQery(token)

    const purchaserCode = data?.data?.find((elem: any)=> elem.name === "Comprador Teste 1" ).code

    const requestBody = {
        code_purchaser: purchaserCode,
        document_customer: removeCpfCnpjMask(formData.cpf||""),
        name_customer: formData.name,
        tariff_amount: 150.00,
        required_amount: formData.requiredValue,
        rate_amount: loanType.rate?.base,
        iof_finance: "Y",
        installments: 4,
        payment_method: 1,
        entry_date: atualDate,
        first_due_date: atualDate30,
        installments_max: 7
    }
    
    const bodyJson = JSON.stringify(requestBody)
    
    const {data:simulations, isFetching:loading} = GetLoanInstallmentsQuery(token, bodyJson, loanType.code, purchaserCode , formData.requiredValue)

    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(parseFloat(formData.requiredValue?.toString() || "0"));

    function selectInstallment(elem:ISimulation){ 
        setInstallment(elem)
        setStep((s)=> s +1 )
    }

    return( 
        <ContentLiveTaxStep5>
            <HeaderSteps text={""}/>
            <HeaderStep5>
                <h3>Valor solicitado</h3>
                <TotalAmountDiv>
                    <span>R$</span>
                    <h4>{formattedValue}</h4>
                </TotalAmountDiv>
                <h5>Selecione a quantidade de parcelas:</h5>
            </HeaderStep5>
            <BodyStep5>
                <div>akiii {loading? "true":"false"}</div>
                <div>akkiiii {isLoading? "true":"false"}</div>
                { loading || isLoading?
                    (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>):
                    (
                        <>
                            {simulations?.data?.length > 0 && simulations?.data?.map( ( elem: ISimulation )=>(
                                <CardInstallment onClick={()=> selectInstallment(elem)} >
                                    <span>{elem?.total_installments}x</span>
                                    <span>de</span>
                                    <span>{new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(elem?.installments[0]?.installment_amount ||  0)}</span>
                                </CardInstallment>
                            ) ) }
                        </>
                    )

                }
                
            </BodyStep5>
        </ContentLiveTaxStep5>
    )
}