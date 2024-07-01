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
import { GetLoggedUserQuery } from '@/api/home/queries';
import { formatCPF } from '@/utils/masks';


export default function Home() {

  const [logoutOpen, setLogoutOpen] = useState(false);
  const [userToken, setUserToken] = useState("" as string | undefined)
  const router = useRouter()
  db.AuthTable.get(1).then((res) => setUserToken(res?.token))
  const {data, isLoading } = GetLoggedUserQuery(userToken!)

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
              { 
                isLoading && (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)
              }
              <UserTexts>
                <h2>{data?.data?.name}</h2>
                <p>{data?.data?.document && formatCPF(data?.data?.document)}</p>
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
