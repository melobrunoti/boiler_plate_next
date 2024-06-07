"use client"

import { useState } from "react"
import LoanSimulationBasicPage from "../loanSimulationBasicPage"
import LoanSimulationStep1 from "../LoanSimulationSteps/loanSimulationStep1"
import LiveTaxStep2 from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep2"

export default function LoanSimulation (){ 

    const [step, setStep] = useState(1 as number)
    const [totalStep, SetTotalStep ] = useState(11 as number )
    const [ title ,  setTitle ] = useState("")
    const [loanTypeSelected, setLoanTypeSelected] = useState({} as any)

    return (
        <LoanSimulationBasicPage  totalStep={totalStep} step={step} setStep={setStep} title={title} >
            
            {step == 1 && <LoanSimulationStep1 setStep={setStep} setTile={setTitle} SetTotalStep={SetTotalStep} setLoanTypeSelected={setLoanTypeSelected}/>} 
            {loanTypeSelected.name  == "TAXA FIXA" && step == 2 && <LiveTaxStep2  setStep={setStep} setTile={setTitle} />  }

        </LoanSimulationBasicPage>
    )
    
}