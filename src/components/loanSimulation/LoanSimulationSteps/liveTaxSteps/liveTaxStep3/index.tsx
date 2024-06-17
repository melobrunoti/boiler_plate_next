import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Tooltip } from "@mui/material"
import HeaderSteps from "../../headerSteps"
import { ContentForm, ContentLiveTaxStep3, DivButtons, DivInputs, DivLabelAndIcon } from "./liveTaxStep3.styles"
import { BootstrapInput } from "@/styles/muiGlobal"
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton"
import { SpanErros } from "@/styles/Global.styles"
import { useLoanSimulationStore } from "@/store/loanSimulation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { IDataForm, zodSchema } from "./schema"
import { formatRG } from "@/utils/masks"
import InfoIcon from '@mui/icons-material/Info';
import AlertMobile from "@/components/_ui/Alert/alertMobile"
import ModalSMSCodeConfirm from "../../modalSMSCodeConfirm"


interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep3 = ({setStep, setTitle}:iprops )=> {


    const [openModalSendSMS, setOpenModalSendSMS  ] = useState(false as boolean)
    const [openModalConfirmSMS, setOpenModalConfirmSMS  ] = useState(false as boolean)

    const { register, handleSubmit, formState: { errors} } = useForm<IDataForm>({
        resolver: zodResolver(zodSchema)
    })

    const { formData, setFormData } = useLoanSimulationStore();
    console.log( formData )

    function submit (data:any){ 
        setFormData({maritalStatus: data.maritalStatus} )
        setFormData({gender: data.gender})
        setOpenModalSendSMS(true)
    }

    function cancel(){ 
        setStep((s)=> s-1)
    }

    function handleRGChange(e: React.ChangeEvent<HTMLInputElement>){ 
        const value = e.target.value;
        const formatedRG = formatRG(value);
        setFormData({ rg: formatedRG });
    }    

    function callBackSuccessSMS( ){ 
        setOpenModalConfirmSMS(true)
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
                        <BootstrapInput type="date" {...register("birthDate")} value={formData.birthDate} onChange={(e) => setFormData({ birthDate: e.target.value })} id="birthDate" inputProps={{ max: '9999-12-31' }} />
                        {errors.birthDate &&<SpanErros>{errors.birthDate?.message?.toString()}</SpanErros>}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="rg">
                            RG
                        </InputLabel>
                        <BootstrapInput {...register("rg")}  id="rg" value={formData.rg} inputProps={{maxLength: 12}} onChange={handleRGChange} />
                        {errors.rg&&<SpanErros>{errors.rg?.message?.toString() }</SpanErros>}
                    </FormControl>

                    <FormControl variant="standard"  sx={{padding:"1rem 0 0 0 "}}>
                        <InputLabel shrink sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} htmlFor="gender">
                            Sexo
                        </InputLabel>
                        <Select placeholder="Selecione" defaultValue={formData.gender} size="small" variant="outlined" id="gender" {...register("gender")} >
                            <MenuItem value="M">Masculino</MenuItem>
                            <MenuItem value="F">Feminino</MenuItem>
                            <MenuItem value="O">Outros</MenuItem>
                        </Select>
                        {errors.gender&&<SpanErros>{errors.gender?.message?.toString() }</SpanErros>}
                    </FormControl>

                    <FormControl variant="standard"  sx={{padding:"1rem 0 0 0 "}}>
                        <InputLabel shrink sx={{position:"absolute", top: "-7px", fontSize: "1rem"}} htmlFor="maritalStatus">
                            Estado Civil
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
                        <InputLabel shrink htmlFor="occupation">
                            Profissão
                        </InputLabel>
                        <BootstrapInput id="occupation" value={formData.occupation}  inputProps={{ maxLength: 15 }} {...register("occupation")}  onChange={(e)=> setFormData({occupation: e.target.value})} />
                        {errors.occupation && <SpanErros>{ errors.occupation?.message?.toString() }</SpanErros>}
                    </FormControl>

                    <FormControl>
                        <DivLabelAndIcon>
                            <FormLabel sx={{fontSize: "12px"}} id="PEP">Pessoa Politicamente Exposta  </FormLabel> 
                            <Tooltip arrow title="Pessoas Expostas Politicamente, ou PEPs, são aquelas que desempenharam cargos, empregos ou funções públicas relevantes nos últimos cinco anos, dentro ou fora do Brasil, podendo ser chefes de estado e de governo, políticos e servidores de alto escalão, magistrados ou militares de alta patente e dirigentes de empresas públicas ou partidos políticos, incluindo seus representantes e familiares de primeiro grau.">
                                <InfoIcon fontSize="small" color="primary" />   
                            </Tooltip>
                        </DivLabelAndIcon> 
                        <RadioGroup 
                            sx={{ display: "flex", flexDirection: "row" }}
                            aria-labelledby="PEP"
                        >
                            <FormControlLabel sx={{fontSize: "12px"}} {...register("PEP")} checked={formData.PEP == "S"}  value="S" control={<Radio color="success" />} label={<Box component="div" fontSize="12px">Sim</Box>} onChange={(e)=> setFormData({PEP: e.target.value})} />
                            <FormControlLabel sx={{fontSize: "12px"}} {...register("PEP")} checked={formData.PEP == "N"}  value="N"  control={<Radio color="success" />} label={<Box component="div" fontSize="12px">Não</Box>} onChange={(e)=> setFormData({PEP: e.target.value})} />
                        </RadioGroup>
                        {errors.PEP && <SpanErros>{ errors.PEP?.message?.toString() }</SpanErros>}
                    </FormControl>

                </DivInputs>
                <DivButtons>
                    <PrimaryButton type="submit">Avançar</PrimaryButton>
                    <SecondaryButton type="button" callback={()=> cancel()}>Cancelar</SecondaryButton>
                </DivButtons>
            </ContentForm>
            <AlertMobile open={openModalSendSMS} close={()=>setOpenModalSendSMS(false)} title="Success" callBack={callBackSuccessSMS} >
                SMS enviado com sucesso!
            </AlertMobile>
            <ModalSMSCodeConfirm open={openModalConfirmSMS} close={()=>setOpenModalConfirmSMS(false)}  steStep={setStep} />
        </ContentLiveTaxStep3>
    )
}