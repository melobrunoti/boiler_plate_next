'use client';
import { MainContent } from '@/styles/Global.styles';
import { useEffect, useState } from 'react';
import logoWhite from '../../../../public/images/logoWhite.svg'
import rosto from "../../../../public/images/rosto.webp"
import { BodyContent, ButtonOptions, Content, DivContentSecurity, DivIconText, HeaderLogo, HeaderSecurityModal, LogoTop, OptionsDiv, UserDiv, UserTexts } from './Home.styles';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, Button, CircularProgress } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useRouter } from 'next/navigation';
import LogoutModal from '@/components/_ui/logoutModal';
import { db } from '@/db/db.model';
import { GetLoggedUserQuery } from '@/api/home/queries';
import { formatCPF } from '@/utils/masks';
import ModalUpLowGeneric from '@/components/_ui/modals/ModalUpLowGeneric';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { loggedUserStore } from '@/store/logged';


export default function Home() {

  const [logoutOpen, setLogoutOpen] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);
  const [userToken, setUserToken] = useState("" as string | undefined)
  const router = useRouter()
  db.AuthTable.get(1).then((res) => setUserToken(res?.token))
  const {data:user, isLoading } = GetLoggedUserQuery(userToken!)

  const {setLoggedUser, loggedUser} = loggedUserStore()

  useEffect(( )=> {
    if(user?.data){ 
      setLoggedUser(user?.data)
    }
  },[user])

  //console.log(user)
  function logOut() {
    setLoggedUser({})
    db.AuthTable.delete(1)
   router.push('/welcome')
    
  }

  return (
      <MainContent>
        <Content>
          <HeaderLogo>
            <LogoTop img={logoWhite?.src} />
          </HeaderLogo>
          <BodyContent>
            <UserDiv>
              <Avatar sx={{ width: "30vw", height: "30vw", outline: "3px solid white"}} src={rosto?.src}   />
              { 
                isLoading && (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)
              }
              <UserTexts>
                <h2>{loggedUser?.name}</h2>
                <p>{loggedUser?.document && formatCPF(loggedUser?.document)}</p>
              </UserTexts>
            </UserDiv>
              <OptionsDiv>
                <ButtonOptions onClick={()=> router.push("/operations")}><DivIconText> <ContentPasteSearchOutlinedIcon /> Operações</DivIconText> <ArrowForwardIosIcon/></ButtonOptions>
                <ButtonOptions onClick={()=> setOpenSecurity(true)}><DivIconText> <VerifiedUserIcon/>Segurança</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                <ButtonOptions onClick={() => setLogoutOpen(true)} ><DivIconText> <LogoutIcon/>Sair do aplicativo</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
              </OptionsDiv>
          </BodyContent>
        </Content>

        <LogoutModal
        open={logoutOpen}
        handleClose={() => setLogoutOpen(false)}
        callback={() => logOut()}
      />
      <ModalUpLowGeneric open={openSecurity} close={()=> setOpenSecurity(false)} >
         {/* router.push("/security") usar depois */}
         <HeaderSecurityModal>
              <h4>segurança</h4>
         </HeaderSecurityModal>
         <DivContentSecurity  >
              <button onClick={()=> router.push("/password")}><Avatar sx={{color: "black"}} > <VpnKeyIcon   /> </Avatar> Alterar senha do aplicativo</button>
         </DivContentSecurity>
      </ModalUpLowGeneric>
      </MainContent>
  );
}
