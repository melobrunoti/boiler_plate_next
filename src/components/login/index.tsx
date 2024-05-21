import LoginImg from '@/../public/images/LoginImg.jpg';
import { LogoContainer, MainContainer } from './Login.styles';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <MainContainer>
      <LogoContainer img={LoginImg}></LogoContainer>
      <LoginForm />
    </MainContainer>
  );
}
