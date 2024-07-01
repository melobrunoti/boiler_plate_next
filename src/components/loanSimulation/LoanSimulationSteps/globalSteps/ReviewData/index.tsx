import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, BodyContent, DivContent, Cards, DivTitle, SectionData } from "./ReviewData.styled"
import { useAddressStore, useBankStore, useLoanSimulationStore, useTokenClientStore } from "@/store/loanSimulation"
import { Box, Button, CircularProgress } from "@mui/material"
import { CardData } from "./CardData"
import CreateIcon from '@mui/icons-material/Create';
import ModalRegisterPassword from "@/components/_ui/modals/ModalRegisterPassword"
import ModalConfirmGeneric from "@/components/_ui/modals/ModalConfirmGeneric"
import { removeMaskCPF, removePhoneMask } from "@/utils/masks"
import { CreateClientUserQuery } from "@/api/loanSimulation/queries"
import AlertMobile from "@/components/_ui/Alert/alertMobile"

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const ReviewData = ({setStep, setTitle}:iprops ) => {

    const [ openRegisterPassword, setOpenRegisterPasword ] = useState(false)

    const [openModalConclude, setOpenModalConclude ] =useState(false)
    const [openModalAlert, setOpenModalAlert ] = useState(false)

    const { formData } = useLoanSimulationStore()
    const { FormAddress } = useAddressStore( )
    const { FormBank } = useBankStore( )

    const { token } = useTokenClientStore()

    const payload = { 
        "client_document": removeMaskCPF(formData.cpf!),
        "client_name": formData.name,
        "email": formData.email,
        "phone": removePhoneMask(formData.phone!),
        "password1": formData.password,
        "password2": formData.confirmPassword
    }

    const payloaJson = JSON.stringify(payload)

    const { data, isFetching, refetch } = CreateClientUserQuery(token, payloaJson);
    
    function generateUser (){ 
        setOpenModalAlert(true)
        refetch()
    }


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
                    <PrimaryButton type="button" callback={()=> setOpenRegisterPasword(true)}>Tudo certo! Avançar</PrimaryButton>
                </DivButtons>
            </BodyContent>
            <ModalRegisterPassword callBack={()=>setOpenModalConclude(true)} close={()=> setOpenRegisterPasword(false)} open={openRegisterPassword} />
            <ModalConfirmGeneric open={openModalConclude} callBack={()=>generateUser()} close={()=> setOpenModalConclude(false)} text="<p>Ao clicar em continuar você estará declarando que está de acordo com os termos e condições de serviço.</p> <p>“Declaro serem verdadeiras as informações prestadas, responsabilizando-me na forma da lei, conforme Artigo 299 do Código Penal. Autorizo a CDC Bank a consultar meus dados junto ao Banco Cenral (SCR - Central de Risco) bem como outras agências de crédito para efeito de avaliação de riscos associados”</p>" title="Atenção!" buttonText="Concluir solicitação"/> 
            <AlertMobile callBack={()=> setStep((s)=> s+1)} close={()=> setOpenModalAlert(false)} open={openModalAlert} title="" > 
                {!isFetching ? "Ususario criado com sucesso!": <Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>}
            </AlertMobile>
         </Content>
    )
}