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


    function submit( data: any ){ 

        console.log("akiiiiiiii")
        console.log(data)                   

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
                        <FormControl variant="standard" sx={{width: "100%"}}  >
                            <InputLabel shrink htmlFor="password">
                                Senha
                            </InputLabel>
                                <BootstrapInput type="password"  {...register("password")}  id="password"  inputProps={{maxLength: 12}} onChange={()=>{}}/>   
                            {errors.password&&<SpanErros>{errors.password?.message?.toString() }</SpanErros>}
                        </FormControl>
                        <FormControl variant="standard" sx={{width: "100%"}}>
                            <InputLabel shrink htmlFor="confirmPassword">
                                Confirmação de senha
                            </InputLabel>
                            <BootstrapInput type="confirmPassword" {...register("confirmPassword")}  id="confirmPassword"  inputProps={{maxLength: 12}} onChange={()=>{}}/>
                            {errors.confirmPassword&&<SpanErros>{errors.confirmPassword?.message?.toString() }</SpanErros>}
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