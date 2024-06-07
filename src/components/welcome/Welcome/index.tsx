import { Box, Button } from "@mui/material";
import { ContentCenter, ContentContainer, LogoContainer, LogoTop, MainContainer, WelcomeContentContainer } from "./welcome.styles";
import welcome from '@/../public/images/welcome.png';
import logoTop from '@/../public/images/logo.png'
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton";
import { useRouter } from "next/navigation";


export default function  Welcome( ){ 

    const router = useRouter( ); 
    return( 
        <MainContainer> 
            <LogoContainer img={welcome.src}></LogoContainer>
            <WelcomeContentContainer img={welcome.src}>
                <LogoTop img={logoTop.src}>
                    
                </LogoTop>
                <ContentContainer>
                        <h1>Bem-vindo!</h1>
                        <span>Simule e solicite o crédito ideal para você de maneira descomplicada.</span>
                        <SecondaryButton height="50px" fontSize="16px" callback={()=> router.push("/loanSimulation")} >
                            Simular empréstimo
                        </SecondaryButton>
                        <SecondaryButton callback={()=> router.push("/login")} height="50px" fontSize="16px" >
                            Login
                        </SecondaryButton >
                        <ContentCenter>
                            Precisa de ajuda?
                        </ContentCenter>
                </ContentContainer>
            </WelcomeContentContainer>

        </MainContainer>
    )

}