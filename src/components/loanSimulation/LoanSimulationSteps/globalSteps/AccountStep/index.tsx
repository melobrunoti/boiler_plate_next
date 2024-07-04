import { useAddressStore, useBankStore, useTokenClientStore } from "@/store/loanSimulation"
import { Dispatch, SetStateAction, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { BankSchema, IBankSchema  } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressForm, Content, DivButtons, DivInputs, DivTitle, DivTwoInputs } from "./accountStep.styled"
import { Box, CircularProgress, FormControl, InputLabel, MenuItem } from "@mui/material"
import { Select as MuiSelect } from "@mui/material"
import { SpanErros } from "@/styles/Global.styles"
import { BootstrapInput } from "@/styles/muiGlobal"
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { banksSearchQuery } from "@/api/loanSimulation/queries"
import Select from 'react-select';


interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const AccountStep = ({setStep, setTitle}:iprops ) => {


    const { FormBank, setFormBank, } = useBankStore()
    const {token} = useTokenClientStore()

    const {data, isFetching} = banksSearchQuery(token)
    
    const {register, handleSubmit, control ,formState:{ errors} } = useForm<IBankSchema>({
        resolver: zodResolver(BankSchema)
    })

    useEffect( ( )=> { 
        setTitle("Dados Bancários")
    },[])

    function submit( data:IBankSchema  ){ 
        setStep((s)=> s+1)
    }



    return(
        <Content>
            <DivTitle>
                <h2>Informe a conta para depósito</h2>   
            </DivTitle>
            { !isFetching?(<AddressForm  onSubmit={handleSubmit(submit)}>
                <DivInputs>
                    <Controller name="bank" control={control} render={({field})=> (
                        <Select 
                            {...field}
                            options={data?.data?.map((b:any) => ({
                                value: b.CODBANCO,
                                label: b.DESCRICAO,
                            }))} 
                            placeholder="selecione" 
                        />
                    )}> 

                    </Controller>
                        {errors.bank &&<SpanErros>{errors.bank?.message?.toString()}</SpanErros>}
                    <DivTwoInputs>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="agency">
                                Agência
                            </InputLabel>
                            <BootstrapInput type="number" {...register("agency")} value={FormBank?.agency} onChange={(e)=> setFormBank({agency: e.target.value})} id="agency" />
                            {errors.agency &&<SpanErros>{errors.agency?.message?.toString()}</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="dv">
                                Dv
                            </InputLabel>
                            <BootstrapInput type="number" {...register("DV")} value={FormBank?.DV} onChange={(e)=> setFormBank({DV: e.target.value})} id="dv"  />
                            {errors.DV &&<SpanErros>{errors.DV?.message?.toString()}</SpanErros>}
                        </FormControl>
                    </DivTwoInputs>
                    <DivTwoInputs>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="address">
                                Conta
                            </InputLabel>
                            <BootstrapInput type="number" {...register("account")} value={FormBank?.account} onChange={(e)=> setFormBank({account: e.target.value})} id="address"  />
                            {errors.account &&<SpanErros>{errors.account?.message?.toString()}</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="digit">
                                Dígito
                            </InputLabel>
                            <BootstrapInput type="number" {...register("accountDigit")} value={FormBank?.accountDigit} onChange={(e)=> setFormBank({accountDigit: e.target.value})} id="digit"  />
                            {errors.accountDigit &&<SpanErros>{errors.accountDigit?.message?.toString()}</SpanErros>}
                        </FormControl>
                    </DivTwoInputs>
                    <FormControl variant="standard" sx={{padding:"1rem 0 0 0 "}} >
                        <InputLabel shrink htmlFor="complement" sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} >
                            Tipo de conta
                        </InputLabel>
                        {/* <BootstrapInput {...register("complement")} value={FormAddress.complement} onChange={(e)=> setFormAddress({complement: e.target.value})} id="complement" /> */}
                        <MuiSelect placeholder="selecione" size="small"  variant="outlined" id="maritalStatus"{...register("accountType")}>
                            <MenuItem value="none" disabled>Selecione</MenuItem>
                            <MenuItem value="solteiro">Solteiro</MenuItem>
                            <MenuItem value="casado">Casado</MenuItem>
                            <MenuItem value="viuvo">Viúvo</MenuItem>    
                            <MenuItem value="divorciado">Divorciado</MenuItem>
                            <MenuItem value="separado">Separado</MenuItem>
                            <MenuItem value="uniaoEstavel">União estável / Convivência marital</MenuItem>
                            <MenuItem value="Outros">Outros</MenuItem>
                        </MuiSelect>
                        {errors.accountType &&<SpanErros>{errors.accountType?.message?.toString()}</SpanErros>}
                    </FormControl>
                </DivInputs> 

                <DivButtons>
                    <PrimaryButton type="submit">Avançar</PrimaryButton>
                </DivButtons>

            </AddressForm>): (
                <Box width="100%" height="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}> 
                    <CircularProgress />
                </Box>
            ) }
        </Content>
    )
}