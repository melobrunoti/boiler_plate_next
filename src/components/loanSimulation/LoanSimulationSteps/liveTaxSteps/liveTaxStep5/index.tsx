import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BodyStep5, CardInstallment, ContentLiveTaxStep5, HeaderStep5, TotalAmountDiv } from "./liveTaxStep5.styled"
import HeaderSteps from "../../headerSteps"
import { useLoanSimulationResponseStore, useLoanSimulationStore, useSelectedInstallmentStore, useTokenClientStore } from "@/store/loanSimulation";
import { format } from "path";
import { loggedFetchConteiner } from "@/api/config";
import { NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import { removeCpfCnpjMask } from "@/utils/masks";
import { Box, CircularProgress } from "@mui/material";
import { getPurchaseCodeQery } from "@/api/loanSimulation/queries";
import { addDaysToAtualDate } from "@/utils/date";
import { ISimulation } from "@/store/loanSimulation/types";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep5 = ({setStep, setTitle}:iprops )=> {

    const {setFormData, formData} = useLoanSimulationStore();
    const { loanType } = useLoanSimulationResponseStore();
    const {setInstallment}= useSelectedInstallmentStore( )
    const [ purchaseCode, setPurchaseCode ] = useState("" as string)
    const [ simulations, setSimulations  ] = useState([] as ISimulation[])
    const [ loading, setLoading ] = useState(false)


    const installmentsMin = 1
    const installmentsMax = 5
    const [ currentInstallments, setCurrentInstallments  ] = useState(installmentsMin as number)
    const atualDate = addDaysToAtualDate(0)
    const atualDate30 = addDaysToAtualDate(30)

    const requestBody = {
        code_purchaser: purchaseCode ,
        document_customer: removeCpfCnpjMask(formData.cpf||""),
        name_customer: formData.name,
        tariff_amount: 150.00,
        required_amount: formData.requiredValue,
        rate_amount: loanType.rate?.base,
        iof_finance: "Y",
        installments: currentInstallments,
        payment_method: 1,
        entry_date: atualDate,
        first_due_date: atualDate30
    }

    const bodyJson = JSON.stringify(requestBody)

    const { token } = useTokenClientStore()
    
    const {data, isLoading }= getPurchaseCodeQery(token)

     

    useEffect(( )=> {
        if(data?.data && !isLoading)
            setPurchaseCode(data.data.find((elem: any)=> elem.name === "Comprador Teste 1" ).code)
    },[data])

    useEffect(()=> { 
        setLoading(true)
        if(purchaseCode && purchaseCode != ""){
            loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/simulation/${loanType.code}`, {method: "POST", headers:{Authorization: `Bearer ${token}` }, body:bodyJson}).then((res: any)=> {
                setSimulations((an: any) => [...an, res.data])
                if(currentInstallments < installmentsMax ){ 
                    setLoading(true)
                    setCurrentInstallments(( s)=> s+1)
                }else{ 
                    setLoading(false)
                }
            })
        }
    },[purchaseCode, currentInstallments])


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
                {simulations.length > 0 && simulations.map( ( elem: ISimulation )=>(
                    <CardInstallment onClick={()=> selectInstallment(elem)} >
                        <span>{elem?.total_installments}x</span>
                        <span>de</span>
                        <span>{new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(elem?.installments[0]?.installment_amount ||  0)}</span>
                    </CardInstallment>

                ) ) }
                {loading && <Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>}

            </BodyStep5>
        </ContentLiveTaxStep5>
    )
}