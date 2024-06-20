"use client"

import { useState } from "react"
import LoanSimulationBasicPage from "../LoanSimulationBasicPage"
import LoanSimulationStep1 from "../LoanSimulationSteps/loanSimulationStep1"
import LiveTaxStep2 from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep2"
import { useLoanSimulationResponseStore } from "@/store/loanSimulation"
import { LiveTaxStep3 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep3"
import { LiveTaxStep4 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep4"
import { LiveTaxStep5 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep5"
import { LiveTaxStep6 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep6"
import { AddressStep }  from "../LoanSimulationSteps/globalSteps/AddressStep"
import { AccountStep }  from "../LoanSimulationSteps/globalSteps/AccountStep"
import { SubmitDocumentStep } from "../LoanSimulationSteps/globalSteps/SubmitDocumentStep"
import { ReviewData } from "../LoanSimulationSteps/globalSteps/ReviewData"
import { PreApprovedSuccess } from "../LoanSimulationSteps/globalSteps/PreApprovedSuccess"
import { MonitorStatus } from "../LoanSimulationSteps/globalSteps/MonitorStatus"
import ConsignmentLoanStep2 from "../LoanSimulationSteps/consignmentLoanSteps/consignmentLoanStep2"

export default function LoanSimulation (){ 

    const [step, setStep] = useState(1 as number)
    const [totalStep, SetTotalStep ] = useState(11 as number )
    const [ title ,  setTitle ] = useState("" as string)
    const { loanType } = useLoanSimulationResponseStore();
    const [ back, setBack ] = useState(true)
    const [ stepInfo, setStepInfo ] = useState(true)
    
    return (

        <LoanSimulationBasicPage  totalStep={totalStep} step={step} setStep={setStep} title={title} back={back} stepInfo={ stepInfo}>
            
            {step == 1 && <LoanSimulationStep1 setStep={setStep} setTile={setTitle} SetTotalStep={SetTotalStep} />} 

            {loanType.name  == "TAXA FIXA" && step == 2  && <LiveTaxStep2 setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 3  && <LiveTaxStep3 setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 4  && <LiveTaxStep4 setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 5  && <LiveTaxStep5 setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 6  && <LiveTaxStep6 setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 7  && <AddressStep setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 8  && <AccountStep setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 9  && <SubmitDocumentStep setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 10 && <ReviewData setStep={setStep} setTitle={setTitle} />}
            {loanType.name  == "TAXA FIXA" && step == 11 && <PreApprovedSuccess setStep={setStep} setTitle={setTitle} setBack={setBack}  />}
            {loanType.name  == "TAXA FIXA" && step == 12 && <MonitorStatus setStep={setStep} setTitle={setTitle} setBack={setBack} setStepInfo={setStepInfo} />}

            {loanType.name == "Produto de Taxa Teste" && step == 2 && <ConsignmentLoanStep2 setStep={setStep} setTitle={setTitle} /> }
   

        </LoanSimulationBasicPage>
    )
    
}