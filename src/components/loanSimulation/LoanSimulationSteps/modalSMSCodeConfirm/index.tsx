import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { Dispatch, PropsWithChildren, SetStateAction, useRef } from "react";
import { DivInputs, DivTexts, StyledLink } from "./modalSMSCodeConfirm.styled";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";


interface IProps { 
    open: boolean, 
    close: () => void,
    steStep: Dispatch<SetStateAction<number>>
} 

export default function ModalSMSCodeConfirm ({ open, close, steStep}:IProps){ 

    const inputRefs = [
        useRef<HTMLInputElement>(null), 
        useRef<HTMLInputElement>(null), 
        useRef<HTMLInputElement>(null), 
        useRef<HTMLInputElement>(null)
    ];

    const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;

        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }
    }

    return( 
        <Dialog
          open={open}
          onClose={(e,d)=>close()}
          fullWidth={true}
          sx={{
            "& .MuiDialog-paper": {
            borderRadius: "1rem",
                }
            }}
        >
          <DialogTitle fontSize={"1.13rem"} display={"flex"} justifyContent={"center"} >Código de verificação</DialogTitle>
          <DialogContent>
            <DialogContentText>
                <DivTexts>
                    <p>Enviamos um código de verificação via SMS para o número cadastrado.</p>
                    <span>Digite o código abaixo</span>
                </DivTexts>
                <DivInputs>
                    <input type="text" maxLength={1} ref={inputRefs[0]} onInput={(e)=>handleInput(0,e)} />
                    <input type="text" maxLength={1} ref={inputRefs[1]} onInput={(e)=>handleInput(1,e)} />
                    <input type="text" maxLength={1} ref={inputRefs[2]} onInput={(e)=>handleInput(2,e)} />
                    <input type="text" maxLength={1} ref={inputRefs[3]} onInput={(e)=>handleInput(3,e)} />
                </DivInputs>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{display:"flex", flexDirection: "column", gap:"1rem", paddingBottom:"1.5rem"}}>
            <PrimaryButton type="button" callback={() =>steStep((s:number)=> s+1)}>Avançar</PrimaryButton>
            <StyledLink href="">Não recebi, reenviar código</StyledLink>
          </DialogActions>
        </Dialog>
    )
}