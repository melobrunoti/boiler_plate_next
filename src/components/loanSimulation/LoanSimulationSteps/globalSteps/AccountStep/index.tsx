import { useAddressStore, useBankStore } from "@/store/loanSimulation"
import { Dispatch, SetStateAction, useEffect } from "react"
import { useForm } from "react-hook-form"
import { BankSchema, IBankSchema  } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressForm, Content, DivButtons, DivInputs, DivTitle, DivTwoInputs } from "./accountStep.styled"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { SpanErros } from "@/styles/Global.styles"
import { BootstrapInput } from "@/styles/muiGlobal"
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"


interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const AccountStep = ({setStep, setTitle}:iprops ) => {

    //const {FormAddress,  setFormAddress} = useAddressStore()
    const { FormBank, setFormBank } = useBankStore()
    
    const {register, handleSubmit, formState:{ errors} } = useForm<IBankSchema>({
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
            <AddressForm  onSubmit={handleSubmit(submit)}>
                <DivInputs>
                    <FormControl variant="standard" sx={{padding:"1rem 0 0 0 "}} >
                        <InputLabel shrink htmlFor="bank" sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} >
                            Banco
                        </InputLabel>
                        {/* <BootstrapInput {...register("CEP")} value={FormAddress?.CEP} onChange={(e)=> setFormAddress({CEP: e.target.value}) } id="CEP" /> */}
                        <Select placeholder="selecione" size="small" variant="outlined" id="bank" {...register("bank")}>
                            <MenuItem value="solteiro">Solteiro</MenuItem>
                            <MenuItem value="casado">Casado</MenuItem>
                            <MenuItem value="viuvo">Viúvo</MenuItem>
                            <MenuItem value="divorciado">Divorciado</MenuItem>
                            <MenuItem value="separado">Separado</MenuItem>
                            <MenuItem value="uniaoEstavel">União estável / Convivência marital</MenuItem>
                            <MenuItem value="Outros">Outros</MenuItem>
                        </Select>
                        {errors.bank &&<SpanErros>{errors.bank?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <DivTwoInputs>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="address">
                                Agência
                            </InputLabel>
                            <BootstrapInput {...register("agency")} value={FormBank?.agency} onChange={(e)=> setFormBank({agency: e.target.value})} id="address" />
                            {errors.agency &&<SpanErros>{errors.agency?.message?.toString()}</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="number">
                                Dv
                            </InputLabel>
                            <BootstrapInput {...register("DV")} value={FormBank?.DV} onChange={(e)=> setFormBank({DV: e.target.value})} id="number" />
                            {errors.DV &&<SpanErros>{errors.DV?.message?.toString()}</SpanErros>}
                        </FormControl>
                    </DivTwoInputs>
                    <DivTwoInputs>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="address">
                                Conta
                            </InputLabel>
                            <BootstrapInput {...register("account")} value={FormBank?.account} onChange={(e)=> setFormBank({account: e.target.value})} id="address" />
                            {errors.account &&<SpanErros>{errors.account?.message?.toString()}</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="number">
                                Dígito
                            </InputLabel>
                            <BootstrapInput {...register("accountDigit")} value={FormBank?.accountDigit} onChange={(e)=> setFormBank({accountDigit: e.target.value})} id="number" />
                            {errors.accountDigit &&<SpanErros>{errors.accountDigit?.message?.toString()}</SpanErros>}
                        </FormControl>
                    </DivTwoInputs>
                    <FormControl variant="standard" sx={{padding:"1rem 0 0 0 "}} >
                        <InputLabel shrink htmlFor="complement" sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} >
                            Tipo de conta
                        </InputLabel>
                        {/* <BootstrapInput {...register("complement")} value={FormAddress.complement} onChange={(e)=> setFormAddress({complement: e.target.value})} id="complement" /> */}
                        <Select placeholder="selecione" size="small"  variant="outlined" id="maritalStatus"{...register("accountType")}>
                            <MenuItem value="solteiro">Solteiro</MenuItem>
                            <MenuItem value="casado">Casado</MenuItem>
                            <MenuItem value="viuvo">Viúvo</MenuItem>    
                            <MenuItem value="divorciado">Divorciado</MenuItem>
                            <MenuItem value="separado">Separado</MenuItem>
                            <MenuItem value="uniaoEstavel">União estável / Convivência marital</MenuItem>
                            <MenuItem value="Outros">Outros</MenuItem>
                        </Select>
                        {errors.accountType &&<SpanErros>{errors.accountType?.message?.toString()}</SpanErros>}
                    </FormControl>
                </DivInputs>

                <DivButtons>
                    <PrimaryButton type="submit">Avançar</PrimaryButton>
                </DivButtons>

            </AddressForm>
        </Content>
    )
}