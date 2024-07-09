'use client'
import { Box, Button, CircularProgress, FormControl, InputLabel } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContentForm, ContentLiveTaxStep2, DivButtons, DivInputs } from "./liveTaxStep2.styles";
import { BootstrapInput } from "@/styles/muiGlobal";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton";
import HeaderSteps from "../../headerSteps";
import { useLoanSimulationStore, useTokenClientStore } from "@/store/loanSimulation";
import { formatCPF, formatPhone, removeMaskCPF, removePhoneMask } from "@/utils/masks";
import { useForm } from "react-hook-form"
import { zodSchema } from "./schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { SpanErros } from "@/styles/Global.styles";
import { ModalAcceptanceTerms } from "@/components/_ui/modals/ModalAcceptanceTerms";
import { UserExistsQuery } from "@/api/loanSimulation/queries";
import ModalConfirmGeneric from "@/components/_ui/modals/ModalConfirmGeneric";
import { useRouter } from "next/navigation";
import ModalContract from "@/components/_ui/modals/ModalContract";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
    edit:boolean
    setEdit:Dispatch<SetStateAction<boolean>>,
} 

export default function LiveTaxStep2 ({setStep, setTitle, edit, setEdit }:iprops ){ 
    
    const [ dataForm, setDataForm ] = useState(undefined as BodyInit|undefined)
    const [ openErrorUserExists, setOpenErrorUserExists ] = useState(false)
    const { token } = useTokenClientStore()
    
    const { register, handleSubmit, formState: { errors}  } = useForm({
        resolver: zodResolver(zodSchema)
    })

    const [active, setActive] = useState(false)
    const { formData, setFormData } = useLoanSimulationStore();
    const { data, isFetching, refetch } = UserExistsQuery( token, dataForm )


    useEffect(()=> { 
        if(data?.data){ 
            (data?.data?.cpf == false && data?.data?.email == false && data?.data?.phone == false ) && !isFetching &&  setActive(true);
            (data?.data?.cpf == true  || data?.data?.email ==  true || data?.data?.phone == true )  && !isFetching &&  setOpenErrorUserExists(true);
        }
    },[data])    


    
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
    
    function submit( SubmitData: any ) { 
        const bodyRequest =  JSON.stringify({client_document :removeMaskCPF(SubmitData.cpf), email: formData.email, phone: removePhoneMask(formData.phone!) })
        setDataForm(bodyRequest)
        refetch()
    }

    
    function cancel( ){ 
        setStep((s)=> s-1)
    }

    
    function steperSeter(){
        if(edit){
            setEdit(false );
            setStep(10);
        }else{
            setStep((s)=>s+1 )
        }
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
                            <BootstrapInput {...register("email")} type="text" id="email" value={formData.email} onChange={(e) => setFormData({ email: e.target.value })} />
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
                    {isFetching && <Box display={"flex"} justifyContent={"center"} alignItems={"center"}> <CircularProgress></CircularProgress></Box>}
                    <DivButtons>
                        <PrimaryButton type="submit">Avançar</PrimaryButton>
                        <SecondaryButton type="button" callback={()=> cancel()} >Cancelar</SecondaryButton>
                    </DivButtons>
                </ContentForm>
            </ContentLiveTaxStep2>
            <ModalAcceptanceTerms active={active} callBack={()=>  steperSeter()} setActive={setActive}/>
            <ModalConfirmGeneric callBack={()=> setOpenErrorUserExists(false)} open={openErrorUserExists} close={()=> setOpenErrorUserExists(false)} text="Por favor, faça login utilizando suas credenciais cadastradas para acessar o sistema." title={`os campos ${data?.data?.cpf == true ? "cpf,":"" }  ${data?.data?.email == true? "email,":"" }  ${data?.data?.phone == true ? "telefone," : "" }    ja estão cadastrados no sistema.`}  buttonText="Ok"/>
        </>
    )
}