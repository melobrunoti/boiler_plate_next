import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Content, DivButtons, BodyContent, DivContent } from "./ReviewData.styled"
import { useAddressStore, useBankStore, useLoanSimulationStore } from "@/store/loanSimulation"
import { Button } from "@mui/material"

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const ReviewData = ({setStep, setTitle}:iprops ) => {

    const {formData } = useLoanSimulationStore()
    const { FormAddress } = useAddressStore( )
    const { FormBank } = useBankStore( )
    
    useEffect( ( )=> { 
        setTitle("Revisar dados")
    },[])

    return(
        <Content>
            <BodyContent >
                <DivContent>
                    <section>
                        <div> 
                            <h2>Dados pessoais</h2>
                            <Button>editar</Button>
                        </div>

                        <div> 
                            <p>Nome</p>
                            <span>João da Silva</span>
                        </div>
                    </section>
                </DivContent>

                <DivButtons>
                    <PrimaryButton type="submit" callback={()=> setStep((s)=> s+1)}>Avançar</PrimaryButton>
                </DivButtons>
            </BodyContent>
        </Content>
    )
}