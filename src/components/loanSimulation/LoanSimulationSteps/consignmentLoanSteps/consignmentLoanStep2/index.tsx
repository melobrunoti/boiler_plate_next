import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ButtonOptions, ContentForm, ContentLiveTaxStep2, DivButtons, DivInputs, SelectTypeContract } from "./consignmentLoanStep2.styles";
import { BootstrapInput } from "@/styles/muiGlobal";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton";
import HeaderSteps from "../../headerSteps";
import { useLoanSimulationStore } from "@/store/loanSimulation";
import { formatCPF, formatPhone } from "@/utils/masks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { IDataForm, zodSchema } from "./schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { SpanErros } from "@/styles/Global.styles";
import { ModalAcceptanceTerms } from "@/components/_ui/modals/ModalAcceptanceTerms";
import ModalUpLowGeneric from "@/components/_ui/modals/ModalUpLowGeneric";
import AlertMobile from "@/components/_ui/Alert/alertMobile";
import ModalSMSCodeConfirm from "../../modalSMSCodeConfirm";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export default function ConsignmentLoanStep2 ({setStep, setTitle }:iprops ){ 

    const { register, handleSubmit, formState: { errors}  } = useForm({
        resolver: zodResolver(zodSchema)
    })
    const [active, setActive] = useState(false)
    const { formData, setFormData } = useLoanSimulationStore();
    const [ openModalContractType, setOpenModalContractType ] = useState(false)
    const [openModalSendSMS, setOpenModalSendSMS  ] = useState(false as boolean)
    const [openModalConfirmSMS, setOpenModalConfirmSMS  ] = useState(false as boolean)

    useEffect(()=> { 
        setTitle("Pré-cadastro") 
    },[])

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedCpf = formatCPF(value);
        setFormData({ cpf: formattedCpf });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedPhone = formatPhone(value);
        setFormData({ phone: formattedPhone });
    };


    function submit( data: any ) { 
        setActive(true)
    }

    function cancel( ){ 
        setStep(1)
    }

    function selectValueContractType(strValue: string){ 
        setFormData({contractType: strValue})
        setOpenModalContractType(false)
    }

    function callBackSuccessSMS( ){ 
        setOpenModalConfirmSMS(true)
    }

    


    return( 
        <>
            <ContentLiveTaxStep2>
                <HeaderSteps text={"Agora precisamos saber um pouco sobre você"}/>
                <ContentForm  onSubmit={handleSubmit(submit)}>
                    <DivInputs >
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="name">
                                Nome completo
                            </InputLabel>
                            <BootstrapInput {...register("name")} value={formData.name} onChange={(e) => setFormData({ name: e.target.value })} id="name" />
                            {errors.name &&<SpanErros>{errors.name?.message?.toString()}</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="cpf">
                                CPF
                            </InputLabel>
                            <BootstrapInput {...register("cpf")}  id="cpf" value={formData.cpf} inputProps={{maxLength: 14}} onChange={handleCpfChange} />
                            {errors.cpf&&<SpanErros>{errors.cpf?.message?.toString() }</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                        <InputLabel shrink htmlFor="birthDate">
                            Data de nascimento
                        </InputLabel>
                        <BootstrapInput type="date" {...register("birthDate")} value={formData.birthDate} onChange={(e) => setFormData({ birthDate: e.target.value })} id="birthDate" inputProps={{ max: '9999-12-31' }} />
                        {errors.birthDate &&<SpanErros>{errors.birthDate?.message?.toString()}</SpanErros>}
                    </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="email">
                                E-mail
                            </InputLabel>
                            <BootstrapInput {...register("email")} type="email" id="email" value={formData.email} onChange={(e) => setFormData({ email: e.target.value })} />
                            {errors.email && <SpanErros>{errors.email?.message?.toString() }</SpanErros> }
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="phone">
                                Celular
                            </InputLabel>
                            <BootstrapInput id="phone" value={formData.phone}  inputProps={{ maxLength: 15 }} {...register("phone")}  onChange={handlePhoneChange} />
                            {errors.phone && <SpanErros>{ errors.phone?.message?.toString() }</SpanErros>}
                        </FormControl>

                        <FormControl variant="standard"  sx={{padding:"2rem 0 0 0 "}}>
                        <InputLabel shrink sx={{position:"absolute", top: "-5px", fontSize: "1rem"}} htmlFor="maritalStatus">
                            <p>Sua empresa faz parte da rede de conveniados? </p>
                            <span>Se sim, selecione abaixo:</span>
                        </InputLabel>
                        <Select placeholder="selecione" size="small" defaultValue={formData.maritalStatus}  variant="outlined" id="maritalStatus"{...register("maritalStatus")}>
                            <MenuItem value="solteiro">Solteiro</MenuItem>
                            <MenuItem value="casado">Casado</MenuItem>
                            <MenuItem value="viuvo">Viúvo</MenuItem>
                            <MenuItem value="divorciado">Divorciado</MenuItem>
                            <MenuItem value="separado">Separado</MenuItem>
                            <MenuItem value="uniaoEstavel">União estável / Convivência marital</MenuItem>
                            <MenuItem value="Outros">Outros</MenuItem>
                        </Select>
                        {errors.maritalStatus&&<SpanErros>{errors.maritalStatus?.message?.toString() }</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="contractType">
                            Tipo de Contrato
                        </InputLabel>
                        <BootstrapInput id="contractType" value={formData.contractType}  inputProps={{ maxLength: 15 }} {...register("contractType")} onSelect={()=> setOpenModalContractType(true)}  />
                        {errors.contractType && <SpanErros>{ errors.contractType?.message?.toString() }</SpanErros>}
                    </FormControl>
                    </DivInputs>
                    <DivButtons>
                        <PrimaryButton type="submit">Avançar</PrimaryButton>
                        <SecondaryButton type="button" callback={()=> cancel()} >Cancelar</SecondaryButton>
                    </DivButtons>
                </ContentForm>
            </ContentLiveTaxStep2>
            <ModalUpLowGeneric close={()=> setOpenModalContractType(false)} open={openModalContractType} >
                <SelectTypeContract>
                    <ButtonOptions onClick={()=> selectValueContractType("CLT")}>CLT</ButtonOptions>
                    <ButtonOptions onClick={()=> selectValueContractType("Efetivo")}>Efetivo</ButtonOptions>
                    <ButtonOptions onClick={()=> selectValueContractType("Contratado")}>Contratado</ButtonOptions>
                    <ButtonOptions onClick={()=> selectValueContractType("Comissionado")}>Comissionado</ButtonOptions>
                    <ButtonOptions onClick={()=> selectValueContractType("Aposentado")}>Aposentado</ButtonOptions>
                </SelectTypeContract>
            </ModalUpLowGeneric> 
            <ModalAcceptanceTerms active={active} callBack={()=> setOpenModalSendSMS(true)} setActive={setActive}/>
            <AlertMobile open={openModalSendSMS} close={()=>setOpenModalSendSMS(false)} title="Success" callBack={callBackSuccessSMS} >
                SMS enviado com sucesso!
            </AlertMobile>
            <ModalSMSCodeConfirm open={openModalConfirmSMS} close={()=>setOpenModalConfirmSMS(false)}  steStep={setStep} />
        </>
    )
}