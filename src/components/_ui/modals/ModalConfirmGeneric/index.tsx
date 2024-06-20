import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import PrimaryButton from "../../Buttons/PrimaryButton"
import { DivBottons, DivTexts } from "./ModalConfirmGeneric.styles"

interface IProps { 
    open: boolean, 
    close: () => void,
    title: string,
    callBack: ( ) => void,
    text: string,
    buttonText?: string

}

export default function ModalConfirmGeneric ({ open, close, title, text, buttonText , callBack}: IProps ){ 


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
                <DivTexts dangerouslySetInnerHTML={{__html: text}}>
                    
                </DivTexts>
                <DivBottons>
                    <PrimaryButton type="button" callback={()=> callBack()}>{buttonText}</PrimaryButton>
                </DivBottons>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    )
}