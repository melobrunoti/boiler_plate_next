
import LoginImg from '@/../public/images/loginImg.jpg';
import {
  LoginFormContainer,
  LogoContainer,
  MainContainer,
} from './Login.styles';
import LoginForm from '@/components/login/LoginForm';

export default async function Login() {

  

  return (
    <MainContainer>
      <LogoContainer img={LoginImg.src}></LogoContainer>
      <LoginFormContainer img={LoginImg.src}>
        <LoginForm />
      </LoginFormContainer>
    </MainContainer>
  );
}
