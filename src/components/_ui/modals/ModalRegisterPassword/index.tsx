import { Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, InputAdornment, InputLabel } from "@mui/material"
import { DivBottons, DivIcon, DivInputs, FormContent, OutsideInput } from "./ModalRegisterPassword.styled"
import PrimaryButton from "../../Buttons/PrimaryButton"
import { BootstrapInput } from "@/styles/muiGlobal"
import { SpanErros } from "@/styles/Global.styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IDataForm, PasswordSchema } from "./schema"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react"
import { positions } from '@mui/system'; 
import { useLoanSimulationStore } from "@/store/loanSimulation"

interface IProps { 
    open: boolean, 
    close: () => void,
    callBack: ( ) => void,

}

export default function ModalRegisterPassword ({ open, close, callBack}: IProps ){ 

    const [visibleInput1 , setVisibleInput1 ] = useState(false)
    const [visibleInput2 , setVisibleInput2 ] = useState(false)

    const {handleSubmit, register, formState:{errors} } = useForm({
        resolver: zodResolver(PasswordSchema)
    })

    const {setFormData} = useLoanSimulationStore()


    function submit( data: any ){ 

        setFormData({password: data.password })
        setFormData({confirmPassword: data.confirmPassword })
        callBack()
    }


    return( 
        <Dialog
          open={open}
          onClose={(e,d)=>close()}
          fullWidth={true}
          
          sx={{
            "& .MuiDialog-paper": {
            width: "95vw",
            padding: "1rem -1rem",
            borderRadius: "1rem",
            },
            "& .MuiDialogContent-root":{
                padding:" 0.8rem" ,
            }

            }}
        >
          <DialogTitle fontSize={"1rem"} fontWeight={600} textAlign={"center"}>Cadastrar senha do aplicativo</DialogTitle>
          <DialogContent>
            <DialogContentText >
                <FormContent onSubmit={handleSubmit(submit)}>
                    <p>O cadastro da senha é necessário para acompanhar o status da sua solicitação pelo aplicativo de Autocontratação.</p>
                    <p>Após finalizar, acesse a tela inicial, digite seu CPF e a senha cadastrada.</p>
                    <DivInputs>
                        <FormControl variant="standard" sx={{width: "100%", position: "relative"}} >
                            <InputLabel shrink htmlFor="password">
                                Senha
                            </InputLabel>
                                <BootstrapInput type={visibleInput1 ? "text":"password" } {...register("password")}  id="password"  />   
                                {errors.password&&<SpanErros>{errors.password?.message?.toString() }</SpanErros>}
                                { visibleInput1 ? <VisibilityIcon onClick={()=> setVisibleInput1((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} /> : <VisibilityOffIcon onClick={()=> setVisibleInput1((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} />}
                        </FormControl>
                        <FormControl variant="standard" sx={{width: "100%", position: "relative"}}>
                            <InputLabel shrink htmlFor="confirmPassword">
                                Confirmação de senha
                            </InputLabel>
                            <BootstrapInput type={visibleInput2 ? "text":"password" } {...register("confirmPassword")}  id="confirmPassword" />
                            {errors.confirmPassword&&<SpanErros>{errors.confirmPassword?.message?.toString() }</SpanErros>}
                            { visibleInput2 ? <VisibilityIcon onClick={()=> setVisibleInput2((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} /> : <VisibilityOffIcon onClick={()=> setVisibleInput2((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} />}
                        </FormControl>
                    </DivInputs>
                    <DivBottons>
                        <PrimaryButton type="submit" >Avançar</PrimaryButton>
                    </DivBottons>
                </FormContent>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    )
}