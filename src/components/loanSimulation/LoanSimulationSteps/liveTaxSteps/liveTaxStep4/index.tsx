import { Dispatch, SetStateAction, useEffect, useState } from "react"
import HeaderSteps from "../../headerSteps"
import { BodyStep4, ContentLiveTaxStep4, InputRangeDiv, InputsDiv, TopValue, ValuesRangeDiv } from "./liveTaxStep4.styled"
import InputMoneySelectValue from "@/components/_ui/inputMoneySelectValue"
import { Slider } from "@mui/material"
import { useLoanSimulationResponseStore } from "@/store/loanSimulation"


interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep4 = ({setStep, setTitle}:iprops )=> {

    const { loanType } = useLoanSimulationResponseStore();
    const [value, setValue] = useState()

    const max  = loanType.maximum_operating_amount &&  parseFloat(loanType.maximum_operating_amount)
    const min  = loanType.minimum_operation_amount &&  parseFloat(loanType.minimum_operation_amount)


    function handleValue(e, v ){ 
        setValue(v)
    }
 
    useEffect( ( )=> { 
        setTitle("Simulação - Valor")
    },[])

    return(
        <ContentLiveTaxStep4>
            <HeaderSteps text={"Valor máximo liberado para você:"}/>
            <BodyStep4>
                <TopValue>
                    <h3>
                        R$ {loanType.maximum_operating_amount}
                    </h3>
                    <div></div>
                </TopValue>
                <InputsDiv>
                    <h4>
                        Informe o valor desejado:
                    </h4>
                        <InputMoneySelectValue />
                        
                    <InputRangeDiv>
                        <Slider min={min} max={max} value={value} valueLabelDisplay="auto" onChange={handleValue} ></Slider>
                        <ValuesRangeDiv>
                            <span>R$ {min}</span> 
                            <span>R$ {max}</span> 
                        </ValuesRangeDiv>
                    </InputRangeDiv>
                </InputsDiv>
            </BodyStep4>
        </ContentLiveTaxStep4>
    )
}