import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { BootstrapInput } from "@/styles/muiGlobal"
import { Box, CircularProgress, FormControl, InputLabel } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, DivInputs, DivTitle, AddressForm } from "./addressStep.styled"
import { useForm } from "react-hook-form"
import { useAddressStore, useTokenClientStore } from "@/store/loanSimulation"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressSchema, IAddressSchema } from "./schema"
import { SpanErros } from "@/styles/Global.styles"
import { formatCEP } from "@/utils/masks"
import { CepSearchQuery } from "@/api/loanSimulation/queries"
import { set } from "zod"

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const AddressStep = ({setStep, setTitle}:iprops ) => {

    const {FormAddress,  setFormAddress} = useAddressStore()
    const [bodyRequest, setBodyRequest ] = useState(undefined as  undefined | string);
    const { token} = useTokenClientStore();
    const {  data, isError, isFetching } = CepSearchQuery(token, bodyRequest )  
    
    const {register, handleSubmit,  formState:{ errors} } = useForm<IAddressSchema>({
        resolver: zodResolver(AddressSchema),
        values:{
            address: data?.data?.street || undefined,
            city: data?.data?.city || undefined,
            neighborhood: data?.data?.neighborhood || undefined,
            state: data?.data?.state || undefined,
        }
    })
    useEffect( ( )=> { 
        setTitle("Endereço")
    },[])


    //console.log(data)

    useEffect( ( )=> { 
        setFormAddress({address: data?.data?.street || ""})
        setFormAddress({city: data?.data?.city || ""})
        setFormAddress({neighborhood: data?.data?.neighborhood || ""})
        setFormAddress({state: data?.data?.state || ""})
    },[data])
    

    function submit( data:IAddressSchema  ){ 
        setStep((s)=> s+1)
    }
    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedCep = formatCEP(value);
        setFormAddress({ CEP: formattedCep });
    };

    function handleCepSeach(event:any){ 
       let cep = event.target.value.replace("-","")
       if(cep.length === 8){ 
           setBodyRequest(JSON.stringify({cep: cep }))
       }else{
        setBodyRequest(undefined)
       }
    }

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
                            <BootstrapInput {...register("CEP")} value={FormAddress?.CEP} inputProps={{maxLength: 9}} onChange={handleCepChange} onBlurCapture={handleCepSeach} id="CEP"  />
                            {isFetching && <Box  position={"absolute"} zIndex={100} right={"0.5rem"} top={"1.8rem"} >
                                <CircularProgress size={25} />        
                            </Box>}
                            {errors.CEP && <SpanErros>{errors.CEP?.message?.toString()}</SpanErros>}
                            {data?.return_code === "400-09" && !isFetching && <SpanErros>Cep Invalido</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="address">
                            Endereço
                        </InputLabel>
                        <BootstrapInput  {...register("address")} value={FormAddress?.address} onChange={(e)=> setFormAddress({address: e.target.value})} disabled id="address" />
                        {isFetching && <Box  position={"absolute"} zIndex={100} right={"0.5rem"} top={"1.8rem"} >
                            <CircularProgress size={25} />        
                        </Box>}
                        {errors.address &&<SpanErros>{errors.address?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="number">
                            Número
                        </InputLabel>
                        <BootstrapInput type="number" {...register("number")} value={FormAddress.number} onChange={(e)=> setFormAddress({number: e.target.value})} id="number" />
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
                        <BootstrapInput  {...register("neighborhood")} value={FormAddress.neighborhood} onChange={(e)=> setFormAddress({neighborhood: e.target.value})} disabled id="neighborhood" />
                        {isFetching && <Box  position={"absolute"} zIndex={100} right={"0.5rem"} top={"1.8rem"} >
                            <CircularProgress size={25} />        
                        </Box>}
                        {errors.neighborhood &&<SpanErros>{errors.neighborhood?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="city">
                            Cidade
                        </InputLabel>
                        <BootstrapInput {...register("city")} value={FormAddress.city} onChange={(e)=> setFormAddress({city: e.target.value})} disabled id="city" />
                        {isFetching && <Box  position={"absolute"} zIndex={100} right={"0.5rem"} top={"1.8rem"} >
                             <CircularProgress size={25} />        
                        </Box>}
                        {errors.city &&<SpanErros>{errors.city?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="state">
                            Estado
                        </InputLabel>
                        <BootstrapInput  {...register("state")} value={FormAddress.state} onChange={(e)=> setFormAddress({ state: e.target.value})} disabled id="state" />
                            {isFetching && <Box  position={"absolute"} zIndex={100} right={"0.5rem"} top={"1.8rem"} >
                             <CircularProgress size={25} />        
                            </Box>}
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