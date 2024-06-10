import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material"
import HeaderSteps from "../../headerSteps"
import { ContentForm, ContentLiveTaxStep3, DivButtons, DivInputs } from "./liveTaxStep3.styles"
import { BootstrapInput } from "@/styles/muiGlobal"
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton"
import { SpanErros } from "@/styles/Global.styles"
import { useLoanSimulationStore } from "@/store/loanSimulation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useEffect } from "react"
import { IDataForm, zodSchema } from "./schema"
import { formatRG } from "@/utils/masks"



interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep3 = ({setStep, setTitle}:iprops )=> {

    const { register, handleSubmit, formState: { errors} } = useForm<IDataForm>({
        resolver: zodResolver(zodSchema)
    })
    const { formData, setFormData } = useLoanSimulationStore();

    console.log(formData)
    function submit (e:any){ 

    }

    function cancel(){ 

    }

    function handleRGChange(e: React.ChangeEvent<HTMLInputElement>){ 
        const value = e.target.value;
        const formatedRG = formatRG(value);
        setFormData({ rg: formatedRG });
    }    

    function handleOccupationChange( ){ 
        
    }



    useEffect( ( )=> { 
        setTitle("Cadastro")
    })

    return (
            <ContentLiveTaxStep3>
            <HeaderSteps text={"Complete seus dados para continuar"}/>
            <ContentForm  onSubmit={handleSubmit(submit)}>
                <DivInputs >
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="birthDate">
                        Data de nascimento
                        </InputLabel>
                        <BootstrapInput type="date" {...register("birthDate")} value={formData.birthDate} onChange={(e) => setFormData({ birthDate: e.target.value })} id="birthDate" />
                        {errors.birthDate &&<SpanErros>{errors.birthDate?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="rg">
                            RG
                        </InputLabel>
                        <BootstrapInput {...register("rg")}  id="rg" value={formData.rg} inputProps={{maxLength: 14}} onChange={handleRGChange} />
                        {errors.rg&&<SpanErros>{errors.rg?.message?.toString() }</SpanErros>}
                    </FormControl>

                    <FormControl variant="standard"  sx={{padding:"1rem 0 0 0 "}}>
                        <InputLabel shrink sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} htmlFor="gender">
                            Sexo
                        </InputLabel>
                        <Select placeholder="Selecione" size="small" variant="outlined" id="gender" >
                            <MenuItem value="M">Masculino</MenuItem>
                            <MenuItem value="F">Feminino</MenuItem>
                            <MenuItem value="O">Outros</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard"  sx={{padding:"1rem 0 0 0 "}}>
                        <InputLabel shrink sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} htmlFor="maritalStatus">
                            Estado Civil
                        </InputLabel>
                        <Select placeholder="selecione" size="small" variant="outlined" id="maritalStatus" >
                            <MenuItem value="solteiro">Solteiro</MenuItem>
                            <MenuItem value="casado">Casado</MenuItem>
                            <MenuItem value="viuvo">Viúvo</MenuItem>
                            <MenuItem value="divorciado">Divorciado</MenuItem>
                            <MenuItem value="separado">Separado</MenuItem>
                            <MenuItem value="uniaoEstavel">União estável / Convivência marital</MenuItem>
                            <MenuItem value="Outros">Outros</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="occupation">
                            Profissão
                        </InputLabel>
                        <BootstrapInput id="occupation" value={formData.occupation}  inputProps={{ maxLength: 15 }} {...register("occupation")}  onChange={(e)=> setFormData({occupation: e.target.value})} />
                        {errors.occupation && <SpanErros>{ errors.occupation?.message?.toString() }</SpanErros>}
                    </FormControl>

                    <FormControl>
                        <FormLabel id="Pep">Pessoa Politicamente Exposta</FormLabel>
                        <RadioGroup 
                            sx={{ display: "flex" }}
                            aria-labelledby="Pep"
                            name="Pep"
                        >
                            <FormControlLabel value="S" control={<Radio />} label="Sim" />
                            <FormControlLabel value="N" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </FormControl>

                </DivInputs>
                <DivButtons>
                    <PrimaryButton type="submit">Avançar</PrimaryButton>
                    <SecondaryButton type="button" callback={()=> cancel()} >Cancelar</SecondaryButton>
                </DivButtons>
            </ContentForm>
        </ContentLiveTaxStep3>
    )
}