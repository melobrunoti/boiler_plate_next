import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BodyStep5, CardInstallment, ContentLiveTaxStep5, HeaderStep5, TotalAmountDiv } from "./liveTaxStep5.styled"
import HeaderSteps from "../../headerSteps"
import { useLoanSimulationResponseStore, useLoanSimulationStore } from "@/store/loanSimulation";
import { format } from "path";
import { loggedFetchConteiner } from "@/api/config";
import { NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep5 = ({setStep, setTitle}:iprops )=> {

    const {setFormData, formData} = useLoanSimulationStore();
    const { loanType } = useLoanSimulationResponseStore();
    const [ purchaseCode, setPurchaseCode ] = useState("" as string)

    const requestBody = {
        code_purchaser: purchaseCode ,
        document_customer: formData.cpf,
        name_customer: formData.name,
        tariff_amount: 150.00,
        required_amount: formData.requiredValue,
        rate_amount: 5,
        iof_finance: "Y",
        installments: 2,
        payment_method: 1,
        entry_date: "2024-10-04",
        first_due_date: "2024-11-04"
                
    }

    const bodyJson = JSON.stringify(requestBody)


    useEffect(( )=> { 
        if(purchaseCode == ""){
            loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/purchaser`).then((response: any)=> {
                setPurchaseCode(response.data.find((elem: any)=> elem.name === "Comprador Teste 1" ).code)
            })
        }

        if(purchaseCode && purchaseCode != ""){
            loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/simulation/${loanType.code}`, {method: "POST", body:bodyJson}).then((res)=> {
                 console.log(res)
             })
        }
    },[purchaseCode])


    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(formData.requiredValue?.toString() || "0"));

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
                <CardInstallment>
                    <span>5x</span>
                    <span>de</span>
                    <span>R$ 1.312,39</span>
                </CardInstallment>
                <CardInstallment>
                    <span>5x</span>
                    <span>de</span>
                    <span>R$ 1.312,39</span>
                </CardInstallment>
                <CardInstallment>
                    <span>5x</span>
                    <span>de</span>
                    <span>R$ 1.312,39</span>
                </CardInstallment>
                <CardInstallment>
                    <span>5x</span>
                    <span>de</span>
                    <span>R$ 1.312,39</span>
                </CardInstallment>
                <CardInstallment>
                    <span>5x</span>
                    <span>de</span>
                    <span>R$ 1.312,39</span>
                </CardInstallment>
                <CardInstallment>
                    <span>5x</span>
                    <span>de</span>
                    <span>R$ 1.312,39</span>
                </CardInstallment>               
            </BodyStep5>

        </ContentLiveTaxStep5>
    )
}