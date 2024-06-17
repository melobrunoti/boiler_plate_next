import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Content, DivButtons, BodyContent, DivContent, Cards, DivTitle, SectionData } from "./ReviewData.styled"
import { useAddressStore, useBankStore, useLoanSimulationStore } from "@/store/loanSimulation"
import { Button } from "@mui/material"
import { CardData } from "./CardData"
import CreateIcon from '@mui/icons-material/Create';

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const ReviewData = ({setStep, setTitle}:iprops ) => {

    const { formData } = useLoanSimulationStore()
    const { FormAddress } = useAddressStore( )
    const { FormBank } = useBankStore( )
    
    useEffect( ( )=> { 
        setTitle("Revisar dados")
    },[])

    return(
        <Content>
            <BodyContent >
                <DivContent>

                    <SectionData>
                        <DivTitle> 
                            <h2>Dados pessoais</h2>
                            <Button sx={{ fontSize: "0.7rem", lineHeight: "0px" ,padding: "0px"}}>editar <CreateIcon sx={{ fontSize: "0.8rem", marginLeft: "15%"}}/></Button>
                        </DivTitle>
                        <Cards> 
                            <CardData title="Nome" data="asdasd" /> 
                            <CardData title="E-mail" data="asdasd" /> 
                            <CardData title="Celular" data="asdasd" /> 
                            <CardData title="Data de nascimento" data="asdasd" /> 
                            <CardData title="RG" data="asdasd" /> 
                            <CardData title="Sexo" data="asdasd" /> 
                            <CardData title="Estado civil" data="asdasd" /> 
                        </Cards>
                    </SectionData>

                    <SectionData>
                        <DivTitle> 
                            <h2>Endereço</h2>
                            <Button sx={{ fontSize: "0.7rem", lineHeight: "0px" , padding: "0px" }}>editar <CreateIcon sx={{ fontSize: "0.8rem", marginLeft: "15%"}}/></Button>
                        </DivTitle>
                        <Cards> 
                            <CardData title="CEP" data="asdasd" /> 
                            <CardData title="Logradouro" data="asdasd" /> 
                            <CardData title="Número" data="asdasd" /> 
                            <CardData title="Complemento" data="asdasd" /> 
                            <CardData title="Bairro" data="asdasd" /> 
                            <CardData title="Cidade" data="asdasd" /> 
                            <CardData title="UF" data="asdasd" /> 
                        </Cards>
                    </SectionData>

                    <SectionData>
                        <DivTitle> 
                            <h2>Dados Bancários</h2>
                            <Button sx={{ fontSize: "0.7rem",  lineHeight: "0px" ,padding: "0px" }}>editar <CreateIcon sx={{ fontSize: "0.8rem", marginLeft: "15%"}}/></Button>
                        </DivTitle>
                        <Cards> 
                            <CardData title="Banco" data="asdasd" /> 
                            <CardData title="Agência" data="asdasd" /> 
                            <CardData title="Conta" data="asdasd" /> 
                            <CardData title="Tipo de conta" data="asdasd" /> 
                        </Cards>
                    </SectionData>
                    
                </DivContent>

                <DivButtons>
                    <PrimaryButton type="submit" callback={()=> setStep((s)=> s+1)}>Tudo certo! Avançar</PrimaryButton>
                </DivButtons>
            </BodyContent>
        </Content>
    )
}