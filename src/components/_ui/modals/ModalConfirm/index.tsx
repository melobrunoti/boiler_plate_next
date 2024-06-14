import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import PrimaryButton from "../../Buttons/PrimaryButton"
import { ISimulation } from "@/store/loanSimulation/types"
import SecondaryButton from "../../Buttons/SecondaryButton"
import { DivBottons, DivTexts } from "./ModalConfirm.styles"

interface IProps { 
    open: boolean, 
    close: () => void,
    title: string,
    callBack: ( ) => void,
    text: string

}

export default function ModalConfirm ({ open, close, title, text, callBack}: IProps ){ 


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
          <DialogTitle fontSize={"1rem"} fontWeight={600} textAlign={"center"}>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText >
                <DivTexts>
                    <p>{text}</p>
                </DivTexts>
                <DivBottons>
                    <SecondaryButton callback={()=> close()}>Cancelar</SecondaryButton>
                    <PrimaryButton type="button" callback={()=> callBack()}>Confirmar</PrimaryButton>
                </DivBottons>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    )
}