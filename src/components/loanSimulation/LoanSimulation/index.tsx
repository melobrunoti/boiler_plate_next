"use client"

import { useState } from "react"
import LoanSimulationBasicPage from "../loanSimulationBasicPage"
import LoanSimulationStep1 from "../LoanSimulationSteps/loanSimulationStep1"
import LiveTaxStep2 from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep2"
import { useLoanSimulationResponseStore } from "@/store/loanSimulation"
import { LiveTaxStep3 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep3"

export default function LoanSimulation (){ 

    const [step, setStep] = useState(1 as number)
    const [totalStep, SetTotalStep ] = useState(11 as number )
    const [ title ,  setTitle ] = useState("")
    const [loanTypeSelected, setLoanTypeSelected] = useState({} as any)
    const { loanType, } = useLoanSimulationResponseStore();

    console.log( loanType)
    
    return (

        <LoanSimulationBasicPage  totalStep={totalStep} step={step} setStep={setStep} title={title} >
            
            {step == 1 && <LoanSimulationStep1 setStep={setStep} setTile={setTitle} SetTotalStep={SetTotalStep} setLoanTypeSelected={setLoanTypeSelected}/>} 
            {loanType.name  == "TAXA FIXA" && step == 2 && <LiveTaxStep2  setStep={setStep} setTitle={setTitle} />  }
            {loanType.name  == "TAXA FIXA" && step == 3 && <LiveTaxStep3  setStep={setStep} setTitle={setTitle} />  }

        </LoanSimulationBasicPage>
    )
    
}