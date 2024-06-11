import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface IProps extends PropsWithChildren{ 
    open: boolean, 
    close: () => void,
    title: string,
    callBack: ( ) => void
}

export default function AlertMobile ({children ,open, close, title, callBack}: IProps ){ 


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
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
                {children}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={()=> callBack()}>OK</Button>
          </DialogActions>
        </Dialog>
    )
}