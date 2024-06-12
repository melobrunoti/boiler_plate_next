import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import HeaderSteps from "../../headerSteps"
import { BodyAndButtons, BodyStep4, ContentLiveTaxStep4, DivButtons, InputRangeDiv, InputsDiv, TopValue, ValuesRangeDiv } from "./liveTaxStep4.styled"
import InputMoneySelectValue from "@/components/_ui/inputMoneySelectValue"
import { Slider } from "@mui/material"
import { useLoanSimulationResponseStore, useLoanSimulationStore } from "@/store/loanSimulation"
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton"


interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep4 = ({setStep, setTitle}:iprops )=> {

    const { loanType } = useLoanSimulationResponseStore();
    const {setFormData, formData} = useLoanSimulationStore();
    
    const max  = loanType.maximum_operating_amount &&  parseFloat(loanType.maximum_operating_amount)
    const min  = loanType.minimum_operation_amount &&  parseFloat(loanType.minimum_operation_amount)

    const formattedMax = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(max|| 0);
    const formattedMin = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(min || 0);
    
    const [value, setValue] = useState(min||0 as number )

    function handleValue (e :Event, v:number| number[], t: number){ 

        setValue(Number(v))
    }

    function submit(){ 
        setFormData({requiredValue: value })
        setStep((s) => s + 1)
    }

    function cancel (){ 
        setStep((s) => s - 1) 
    }

 
    useEffect( ( )=> { 
        if(formData.requiredValue && formData.requiredValue != 0){ 
            setValue(formData.requiredValue || min || 0)
        }
        setTitle("Simulação - Valor")
    },[])

    return(
        <ContentLiveTaxStep4>
            <HeaderSteps text={"Valor máximo liberado para você:"}/>
            <BodyAndButtons>
                <BodyStep4>
                    <TopValue>
                        <h3>
                            {formattedMax}
                        </h3>
                        <div></div>
                    </TopValue>
                    <InputsDiv>
                        <h4>
                            Informe o valor desejado:
                        </h4>
                            <InputMoneySelectValue value={value} setValue={setValue} max={max||0} />
                        <InputRangeDiv>
                            <Slider min={min|| 0} max={max || 0} value={value} step={0.01} onChange={handleValue} ></Slider>
                            <ValuesRangeDiv>
                                <span>{formattedMin}</span> 
                                <span>{formattedMax}</span> 
                            </ValuesRangeDiv>
                        </InputRangeDiv>
                    </InputsDiv>
                </BodyStep4>
                <DivButtons>
                    <PrimaryButton type="button" callback={()=>submit()}>Avançar</PrimaryButton>
                    <SecondaryButton type="button" callback={()=>cancel()}>Cancelar</SecondaryButton>
                </DivButtons>

            </BodyAndButtons>


        </ContentLiveTaxStep4>
    )
}