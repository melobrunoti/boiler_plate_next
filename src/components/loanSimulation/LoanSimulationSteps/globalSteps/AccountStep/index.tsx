import { useAddressStore } from "@/store/loanSimulation"
import { Dispatch, SetStateAction, useEffect } from "react"
import { useForm } from "react-hook-form"
import { AddressSchema, IAddressSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressForm, Content, DivButtons, DivInputs, DivTitle, DivTwoInputs } from "./accountStep.styled"
import { FormControl, InputLabel } from "@mui/material"
import { SpanErros } from "@/styles/Global.styles"
import { BootstrapInput } from "@/styles/muiGlobal"
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"


interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const AccountStep = ({setStep, setTitle}:iprops ) => {

    const {FormAddress,  setFormAddress} = useAddressStore()
    
    const {register, handleSubmit, formState:{ errors} } = useForm<IAddressSchema>({
        resolver: zodResolver(AddressSchema)
    })
    useEffect( ( )=> { 
        setTitle("Dados Bancários")
    },[])

    function submit( data:IAddressSchema  ){ 
        setStep((s)=> s+1)
    }

    return(
        <Content>
            <DivTitle>
                <h2>Informe a conta para depósito</h2>   
            </DivTitle>
            <AddressForm  onSubmit={handleSubmit(submit)}>
                <DivInputs>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="CEP">
                            Banco
                        </InputLabel>
                        <BootstrapInput {...register("CEP")} value={FormAddress?.CEP} onChange={(e)=> setFormAddress({CEP: e.target.value}) } id="CEP" />
                        {errors.CEP &&<SpanErros>{errors.CEP?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <DivTwoInputs>
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
                    </DivTwoInputs>
                    <DivTwoInputs>
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
                    </DivTwoInputs>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="complement">
                            Complemento
                        </InputLabel>
                        <BootstrapInput {...register("complement")} value={FormAddress.complement} onChange={(e)=> setFormAddress({complement: e.target.value})} id="complement" />
                        {errors.complement &&<SpanErros>{errors.complement?.message?.toString()}</SpanErros>}
                    </FormControl>
                </DivInputs>
                <DivButtons>
                    <PrimaryButton type="submit">Avançar</PrimaryButton>
                </DivButtons>
            </AddressForm>
        </Content>
    )
}