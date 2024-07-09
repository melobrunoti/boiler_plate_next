import { useAddressStore, useBankStore, useTokenClientStore } from "@/store/loanSimulation"
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { BankSchema, IBankSchema  } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressForm, Content, DivButtons, DivInputs, DivTitle, DivTwoInputs, LabelBank } from "./accountStep.styled"
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, SelectChangeEvent } from "@mui/material"
import { Select as MuiSelect } from "@mui/material"
import { SpanErros } from "@/styles/Global.styles"
import { BootstrapInput } from "@/styles/muiGlobal"
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { banksSearchQuery } from "@/api/loanSimulation/queries"
import Select from 'react-select';


interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
    edit:boolean
    setEdit:Dispatch<SetStateAction<boolean>>,
} 

export const AccountStep = ({setStep, setTitle, edit, setEdit}:iprops ) => {


    const { FormBank, setFormBank, } = useBankStore()
    const {token} = useTokenClientStore()

    const {data, isFetching} = banksSearchQuery(token)
    
    const {register, handleSubmit, control ,formState:{ errors} } = useForm<IBankSchema>({
        resolver: zodResolver(BankSchema),
        values: {
            bank: FormBank.bank ? {value: FormBank.bank, label:FormBank.bankDescription } : "",
        }
    })

    useEffect( ( )=> { 
        setTitle("Dados Bancários")
    },[])

    function submit( submitData:IBankSchema  ){
        
        setFormBank({bank: submitData.bank.value})
        setFormBank({bankDescription:submitData.bank.label})

        setFormBank({accountType: submitData.accountType.split("|")[0]})
        setFormBank({accountTypeDescription: submitData.accountType.split("|")[1]})

        if(edit){
            setEdit(false );
            setStep(10);
        }else{
            setStep((s)=>s+1 )
        }
    }
    function handleChangeGender(e:SelectChangeEvent){ 
        setFormBank({accountType: e?.target?.value?.split("|")[0]})
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, limit: number , keyData : string) => {
        if (event.target.value.length <= limit && !isNaN(Number(event.target.value))) {
          setFormBank({[keyData]: event.target.value})
        }
    };

    const account_types = [
        { name: 'Conta corrente', value: 'CC' },
        { name: 'Conta poupança', value: 'CP' },
        { name: 'Conta de pagamento', value: 'CPG' },
    ];

    return(
        <Content>
            <DivTitle>
                <h2>Informe a conta para depósito</h2>   
            </DivTitle>
            { !isFetching?(<AddressForm  onSubmit={handleSubmit(submit)}>
                <DivInputs>
                    <LabelBank htmlFor="bank">Banco</LabelBank>
                    <Controller name="bank" control={control} render={({field})=> (
                        <Select 
                            {...field}
                            defaultValue={ FormBank.bank ? {value: FormBank.bank, label:FormBank.bankDescription } : "" }
                            options={data?.data?.map((b:any) => ({
                                value: b.CODBANCO,
                                label: `${b.CODBANCO} - ${b.DESCRICAO}`,
                            }))} 
                            id="bank"
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
                            <BootstrapInput type="text" {...register("agency")}
                                autoComplete="off"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                value={FormBank?.agency} onChange={(e)=> handleInputChange(e, 5 , "agency")} id="agency" />
                            {errors.agency &&<SpanErros>{errors.agency?.message?.toString()}</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="dv">
                                Dv
                            </InputLabel>
                            <BootstrapInput autoComplete="off" type="number" {...register("DV")} value={FormBank?.DV} onChange={(e)=> handleInputChange(e, 1, "DV")} id="dv"  />
                            {errors.DV &&<SpanErros>{errors.DV?.message?.toString()}</SpanErros>}
                        </FormControl>
                    </DivTwoInputs>
                    <DivTwoInputs>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="address">
                                Conta
                            </InputLabel>
                            <BootstrapInput autoComplete="off" type="number" {...register("account")} value={FormBank?.account} onChange={(e)=>   handleInputChange(e, 20, "account")} id="address"  />
                            {errors.account &&<SpanErros>{errors.account?.message?.toString()}</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="digit">
                                Dígito
                            </InputLabel>
                            <BootstrapInput autoComplete="off" type="number" {...register("accountDigit")} value={FormBank?.accountDigit} onChange={(e)=>  handleInputChange(e, 1, "accountDigit")} id="digit"  />
                            {errors.accountDigit &&<SpanErros>{errors.accountDigit?.message?.toString()}</SpanErros>}
                        </FormControl>
                    </DivTwoInputs>
                    <FormControl variant="standard" sx={{padding:"1rem 0 0 0 "}} >
                        <InputLabel shrink htmlFor="complement" sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} >
                            Tipo de conta
                        </InputLabel>

                        <MuiSelect placeholder="selecione" size="small" sx={{ color: FormBank?.accountType == "" || FormBank?.accountType == "none" ||  FormBank?.accountType == undefined ? "grey": "black"}}  defaultValue={ FormBank?.accountType ? `${FormBank?.accountType}|${FormBank?.accountTypeDescription}`:"none"} variant="outlined" id="maritalStatus"{...register("accountType")} onChange={handleChangeGender} >
                            <MenuItem value="none" disabled>Selecione</MenuItem>
                            {account_types.map((acType)=> <MenuItem value={`${acType.value}|${acType.name}`} >{acType.name}</MenuItem>  )}
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