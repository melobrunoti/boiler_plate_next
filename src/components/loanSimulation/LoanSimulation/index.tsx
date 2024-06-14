"use client"

import { useState } from "react"
import LoanSimulationBasicPage from "../loanSimulationBasicPage"
import LoanSimulationStep1 from "../LoanSimulationSteps/loanSimulationStep1"
import LiveTaxStep2 from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep2"
import { useLoanSimulationResponseStore } from "@/store/loanSimulation"
import { LiveTaxStep3 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep3"
import { LiveTaxStep4 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep4"
import { LiveTaxStep5 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep5"
import { LiveTaxStep6 } from "../LoanSimulationSteps/liveTaxSteps/liveTaxStep6"
import { AddressStep }  from "../LoanSimulationSteps/globalSteps/AddressStep"
import { AccountStep }  from "../LoanSimulationSteps/globalSteps/AccountStep"

export default function LoanSimulation (){ 

    const [step, setStep] = useState(7 as number)
    const [totalStep, SetTotalStep ] = useState(11 as number )
    const [ title ,  setTitle ] = useState("")
    const { loanType } = useLoanSimulationResponseStore();
    
    return (

        <LoanSimulationBasicPage  totalStep={totalStep} step={step} setStep={setStep} title={title} >
            
            {step == 1 && <LoanSimulationStep1 setStep={setStep} setTile={setTitle} SetTotalStep={SetTotalStep} />  } 
            {loanType.name  == "TAXA FIXA" && step == 2 && <LiveTaxStep2  setStep={setStep} setTitle={setTitle} />  }
            {loanType.name  == "TAXA FIXA" && step == 3 && <LiveTaxStep3  setStep={setStep} setTitle={setTitle} />  }
            {loanType.name  == "TAXA FIXA" && step == 4 && <LiveTaxStep4  setStep={setStep} setTitle={setTitle} />  }
            {loanType.name  == "TAXA FIXA" && step == 5 && <LiveTaxStep5  setStep={setStep} setTitle={setTitle} />  }
            {loanType.name  == "TAXA FIXA" && step == 6 && <LiveTaxStep6  setStep={setStep} setTitle={setTitle} />  }
            {step == 7 && <AddressStep setStep={setStep} setTitle={setTitle} />}
            {step == 8 && <AccountStep setStep={setStep} setTitle={setTitle} />}
            
        </LoanSimulationBasicPage>
    )
    
}