import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { BootstrapInput } from "@/styles/muiGlobal"
import { FormControl, InputLabel } from "@mui/material"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Content, DivButtons, DivInputs, DivTitle, AddressForm } from "./addressStep.styled"
import { useForm } from "react-hook-form"
import { useAddressStore } from "@/store/loanSimulation"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressSchema, IAddressSchema } from "./schema"
import { SpanErros } from "@/styles/Global.styles"
import { formatCEP } from "@/utils/masks"

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const AddressStep = ({setStep, setTitle}:iprops ) => {

    const {FormAddress,  setFormAddress} = useAddressStore()
    
    const {register, handleSubmit, formState:{ errors} } = useForm<IAddressSchema>({
        resolver: zodResolver(AddressSchema)
    })
    useEffect( ( )=> { 
        setTitle("Endereço")
    },[])

    function submit( data:IAddressSchema  ){ 
        setStep((s)=> s+1)
    }
    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedCep = formatCEP(value);
        setFormAddress({ CEP: formattedCep });
    };

    return(
        <Content>
            <DivTitle>
                <h2>Informe seu endeço atual</h2>   
            </DivTitle>
            <AddressForm  onSubmit={handleSubmit(submit)}>
                <DivInputs>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="CEP">
                                CEP
                        </InputLabel>
                        <BootstrapInput {...register("CEP")} value={FormAddress?.CEP} onChange={handleCepChange} id="CEP"  />
                        {errors.CEP &&<SpanErros>{errors.CEP?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="address">
                            Endereço
                        </InputLabel>
                        <BootstrapInput {...register("address")} value={FormAddress?.address} onChange={(e)=> setFormAddress({address: e.target.value})} id="address" />
                        {errors.address &&<SpanErros>{errors.address?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="number">
                            Número
                        </InputLabel>
                        <BootstrapInput {...register("number")} value={FormAddress.number} onChange={(e)=> setFormAddress({number: e.target.value})} id="number" />
                        {errors.number &&<SpanErros>{errors.number?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="complement">
                            Complemento
                        </InputLabel>
                        <BootstrapInput {...register("complement")} value={FormAddress.complement} onChange={(e)=> setFormAddress({complement: e.target.value})} id="complement" />
                        {errors.complement &&<SpanErros>{errors.complement?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="neighborhood">
                            Bairro
                        </InputLabel>
                        <BootstrapInput {...register("neighborhood")} value={FormAddress.neighborhood} onChange={(e)=> setFormAddress({neighborhood: e.target.value})} id="neighborhood" />
                        {errors.neighborhood &&<SpanErros>{errors.neighborhood?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="city">
                            Cidade
                        </InputLabel>
                        <BootstrapInput {...register("city")} value={FormAddress.city} onChange={(e)=> setFormAddress({city: e.target.value})} id="city" />
                        {errors.city &&<SpanErros>{errors.city?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="state">
                            Estado
                        </InputLabel>
                        <BootstrapInput {...register("state")} value={FormAddress.state} onChange={(e)=> setFormAddress({ state: e.target.value})} id="state" />
                        {errors.state &&<SpanErros>{errors.state?.message?.toString()}</SpanErros>}
                    </FormControl>
                </DivInputs>
                <DivButtons>
                    <PrimaryButton type="submit">Avançar</PrimaryButton>
                </DivButtons>
            </AddressForm>
        </Content>
    )
}