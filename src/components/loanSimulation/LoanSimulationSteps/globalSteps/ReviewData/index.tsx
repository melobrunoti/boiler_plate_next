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
            <BodyContent>
                <DivContent>
                    <SectionData>
                        <DivTitle> 
                            <h2>Dados pessoais</h2>
                            <Button sx={{ fontSize: "0.7rem", lineHeight: "0px" ,padding: "0px"}}>editar <CreateIcon sx={{ fontSize: "0.8rem", marginLeft: "15%"}}/></Button>
                        </DivTitle>
                        <Cards> 
                            <CardData title="Nome" data={formData.name} /> 
                            <CardData title="E-mail" data={formData.email} /> 
                            <CardData title="Celular" data={formData.phone} /> 
                            <CardData title="Data de nascimento" data={formData.birthDate} /> 
                            <CardData title="RG" data={formData.rg} /> 
                            <CardData title="Sexo" data={formData.gender} /> 
                            <CardData title="Estado civil" data={formData.maritalStatus} /> 
                        </Cards>
                    </SectionData>

                    <SectionData>
                        <DivTitle> 
                            <h2>Endereço</h2>
                            <Button sx={{ fontSize: "0.7rem", lineHeight: "0px" , padding: "0px" }}>editar <CreateIcon sx={{ fontSize: "0.8rem", marginLeft: "15%"}}/></Button>
                        </DivTitle>
                        <Cards> 
                            <CardData title="CEP" data={FormAddress.CEP} /> 
                            <CardData title="Logradouro" data={FormAddress.address} /> 
                            <CardData title="Número" data={FormAddress.number}/> 
                            <CardData title="Complemento" data={FormAddress.complement} /> 
                            <CardData title="Bairro" data={FormAddress.neighborhood} /> 
                            <CardData title="Cidade" data={FormAddress.city} /> 
                            <CardData title="UF" data={FormAddress.state} /> 
                        </Cards>
                    </SectionData>

                    <SectionData>
                        <DivTitle> 
                            <h2>Dados Bancários</h2>
                            <Button sx={{ fontSize: "0.7rem",  lineHeight: "0px" ,padding: "0px" }}>editar <CreateIcon sx={{ fontSize: "0.8rem", marginLeft: "15%"}}/></Button>
                        </DivTitle>
                        <Cards> 
                            <CardData title="Banco" data={FormBank.bank} /> 
                            <CardData title="Agência" data={`${FormBank.agency}-${FormBank.DV}`} /> 
                            <CardData title="Conta" data={`${FormBank.account}-${FormBank.accountDigit}`} /> 
                            <CardData title="Tipo de conta" data={FormBank.accountType} /> 
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