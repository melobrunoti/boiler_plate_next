import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { StyledContentModal, style } from "./styles";

export interface ILogoutModalProps {
    open: boolean,
    handleClose : ()=> void,
    callback : ()=> void ,
}



export default function LogoutModal({open, handleClose, callback}: ILogoutModalProps){ 

    return( 
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        data-testid="logout-modal"
      >
          <Box sx={style} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} borderRadius={"1rem"}  > 
            <StyledContentModal>
                <h2>
                    Sair do aplicativo? 
                </h2>
                <p>
                    Ao realizar novo login você terá de informar novamente o Email e senha do aplicativo. 
                </p>
                <Box display={"flex"} flexDirection={"column"} marginTop={"1rem"} gap={"1rem"} width={"100%"} >
                    <Button variant= "contained" color="error"   sx={{ borderRadius: '2rem', fontWeight: 'bold' }} onClick={()=> callback()}>Sair</Button>
                    <Button variant= "outlined"  color="inherit" sx={{ borderRadius: '2rem', fontWeight: 'bold' }} onClick={()=> handleClose()} >Cancelar</Button>
                </Box>
            </StyledContentModal>
          </Box>
      </Modal>

    )
}