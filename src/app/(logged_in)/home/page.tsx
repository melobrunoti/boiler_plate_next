'use client';
import { MainContent } from '@/styles/Global.styles';
import { useState } from 'react';
import logoWhite from '../../../../public/images/logoWhite.svg'
import rosto from "../../../../public/images/rosto.webp"
import { BodyContent, ButtonOptions, Content, DivIconText, HeaderLogo, LogoTop, OptionsDiv, UserDiv, UserTexts } from './Home.styles';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, CircularProgress } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useRouter } from 'next/navigation';
import LogoutModal from '@/components/_ui/logoutModal';
import { db } from '@/db/db.model';


export default function Home() {

  const [logoutOpen, setLogoutOpen] = useState(false);
  const router = useRouter()

  function logOut() {
    db.AuthTable.delete(1)
   router.push('/login')
    
  }

  return (
      <MainContent>
        <Content>
          <HeaderLogo>
            <LogoTop img={logoWhite.src} />
          </HeaderLogo>
          <BodyContent>
            <UserDiv>
              <Avatar sx={{ width: "30vw", height: "30vw", outline: "3px solid white"}} src={rosto.src}   />
              <UserTexts>
                <h2>Teste</h2>
                <p>131231312</p>
              </UserTexts>
            </UserDiv>
              <OptionsDiv>
                <ButtonOptions onClick={()=> router.push("/operations")}><DivIconText> <ContentPasteSearchOutlinedIcon /> Operações</DivIconText> <ArrowForwardIosIcon/></ButtonOptions>
                <ButtonOptions onClick={()=> router.push("/security")}><DivIconText> <VerifiedUserIcon/>Segurança</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                <ButtonOptions onClick={() => setLogoutOpen(true)} ><DivIconText> <LogoutIcon/>Sair do aplicativo</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
              </OptionsDiv>
          </BodyContent>
        </Content>
        <LogoutModal
        open={logoutOpen}
        handleClose={() => setLogoutOpen(false)}
        callback={() => logOut()}
      />
      </MainContent>
  );
}
