"use client"
import BasicPage from "@/components/BasicPage";
import { FormContent, DivInputs} from "./Password.styles";
import { useState } from "react";
import { Box, CircularProgress, FormControl, InputLabel } from "@mui/material";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import { BootstrapInput } from "@/styles/muiGlobal";
import { SpanErros } from "@/styles/Global.styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PasswordSchema } from "./schema";
import { UpdatePasswordQuery } from "@/api/home/queries";
import { useTokenClientStore } from "@/store/loanSimulation";
import AlertMobile from "@/components/_ui/Alert/alertMobile";
import { getClientTokenQuery } from "@/api/loanSimulation/queries";
import { db } from "@/db/db.model";


export default function Password( ){ 

    const [ step, setStep ] = useState("password" as string)
    const [title, setTitle ] = useState("Alterar senha")
    const [dataRequest, setDataRequest ] = useState(undefined as string | undefined )
    const [openModalUpdate , setOpenModalUpdate ] = useState(false)
    const [ userToken, setUserToken ] = useState(undefined as string | undefined)

    db.AuthTable.get(1).then((obj)=> setUserToken(obj?.token))


    const [visibleInput1 , setVisibleInput1 ] = useState(false)
    const [visibleInput2 , setVisibleInput2 ] = useState(false)
    const [visibleInput3 , setVisibleInput3 ] = useState(false)

    const {handleSubmit, register, formState:{errors} } = useForm({
        resolver: zodResolver(PasswordSchema)
    })

     const { data , isFetching, refetch } = UpdatePasswordQuery( userToken ,dataRequest )

    function submit(data: any ){ 
        refetch()
        setOpenModalUpdate(true)
        setDataRequest( JSON.stringify(data)); 
    }

    return( 

        <BasicPage step={step} setStep={setStep} title={title} back={true} > 
            <FormContent onSubmit={handleSubmit(submit)}>
                <DivInputs>

                    <FormControl variant="standard" sx={{width: "100%", position: "relative"}} >
                        <InputLabel shrink htmlFor="atualPassword">
                            Senha atual do aplicativo
                        </InputLabel>
                        <BootstrapInput placeholder="Digite sua senha" type={visibleInput1 ? "text":"password" } {...register("atualPassword")}  id="atualPassword"  />   
                        {errors.atualPassword&&<SpanErros>{errors.atualPassword?.message?.toString() }</SpanErros>}
                        { visibleInput1 ? <VisibilityIcon onClick={()=> setVisibleInput1((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} /> : <VisibilityOffIcon onClick={()=> setVisibleInput1((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} />}
                    </FormControl>

                    <FormControl variant="standard" sx={{width: "100%", position: "relative"}} >
                        <InputLabel shrink htmlFor="newPassword">
                            Nova senha
                        </InputLabel>
                        <BootstrapInput placeholder="Digite sua senha" type={visibleInput2 ? "text":"password" } {...register("newPassword")}  id="newPassword"  />   
                        {errors.newPassword&&<SpanErros>{errors.newPassword?.message?.toString() }</SpanErros>}
                        { visibleInput2 ? <VisibilityIcon onClick={()=> setVisibleInput2((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} /> : <VisibilityOffIcon onClick={()=> setVisibleInput2((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} />}
                    </FormControl>

                    <FormControl variant="standard" sx={{width: "100%", position: "relative"}}>
                        <InputLabel shrink htmlFor="confirmNewPassword">
                            Confirmar nova senha
                        </InputLabel>
                        <BootstrapInput placeholder="Digite sua senha"  type={visibleInput3 ? "text":"password" } {...register("confirmNewPassword")}  id="confirmNewPassword" />
                        {errors.confirmNewPassword&&<SpanErros>{errors.confirmNewPassword?.message?.toString() }</SpanErros>}
                        { visibleInput3 ? <VisibilityIcon onClick={()=> setVisibleInput3((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} /> : <VisibilityOffIcon onClick={()=> setVisibleInput3((s)=> !s )} sx={{position:"absolute", top:"1.8rem", right:"0.5rem", zIndex:"2000"}} />}
                    </FormControl>

                </DivInputs>
                <PrimaryButton type="submit">Alterar senha</PrimaryButton>
            </FormContent>
            <AlertMobile title="" callBack={()=> setOpenModalUpdate( false)} close={()=>setOpenModalUpdate(false)} open={openModalUpdate}  > 
                {isFetching && <Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>}
            </AlertMobile>
        </BasicPage>
    )
}