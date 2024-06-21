import { Box, Button, FormControl, InputLabel } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContentForm, ContentLiveTaxStep2, DivButtons, DivInputs } from "./liveTaxStep2.styles";
import { BootstrapInput } from "@/styles/muiGlobal";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton";
import HeaderSteps from "../../headerSteps";
import { useLoanSimulationStore, useTokenClientStore } from "@/store/loanSimulation";
import { formatCPF, formatPhone, removeCpfCnpjMask, removeMaskCPF } from "@/utils/masks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { IDataForm, zodSchema } from "./schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { SpanErros } from "@/styles/Global.styles";
import { ModalAcceptanceTerms } from "@/components/_ui/modals/ModalAcceptanceTerms";
import { useQuery } from "@tanstack/react-query";
import { userExists } from "@/api/loanSimulation/fetchers";
import { UserExistsQuery } from "@/api/loanSimulation/queries";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export default function LiveTaxStep2 ({setStep, setTitle }:iprops ){ 
    
    const [dataForm, setDataForm] = useState({ } as BodyInit)


    
    
    const { register, handleSubmit, formState: { errors}  } = useForm({
        resolver: zodResolver(zodSchema)
    })

    const { token } = useTokenClientStore()
    const [active, setActive] = useState(false)
    const { formData, setFormData } = useLoanSimulationStore();
    const { data, isLoading, error, refetch } = UserExistsQuery()
    
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
    
    async function submit( data2: any ) { 
        const cpfNoFormated = removeMaskCPF(data2.cpf)
        const body =  JSON.stringify({CPFCNPJ : cpfNoFormated })
        setActive(true)
        const res = await userExists( token, body )
        console.log(res)
    }
    
    function cancel( ){ 
        setStep(1)
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
                    </DivInputs>
                    <DivButtons>
                        <PrimaryButton type="submit">Avançar</PrimaryButton>
                        <SecondaryButton type="button" callback={()=> cancel()} >Cancelar</SecondaryButton>
                    </DivButtons>
                </ContentForm>
            </ContentLiveTaxStep2>
            <ModalAcceptanceTerms active={active} callBack={()=> setStep((s)=>s+1 )} setActive={setActive}/>
        </>
    )
}