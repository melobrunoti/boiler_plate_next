import React from 'react';
import {
  FormContainer,
  LoginFormContainer,
  LogoContainer,
  MainContainer,
} from './Login.styles';
import { useRouter } from 'next/navigation';

import { Button, TextField } from '@mui/material';
import LoginImg from '@/../public/images/LoginImg.jpg';

export default function Login() {
  const router = useRouter();

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/home', { scroll: false });
  }
  return (
    <MainContainer>
      <LogoContainer img={LoginImg}></LogoContainer>
      <LoginFormContainer>
        <FormContainer onSubmit={(e) => login(e)}>
          <div>
            <p>Seja bem vindo(a)</p>
            <h2>CDC Bank</h2>
          </div>
          <TextField required type="email" label="E-mail" />
          <TextField required type="password" label="Senha" />
          <Button type="submit" variant="contained">
            Entrar
          </Button>{' '}
          <Button>Primeiro acesso</Button>
        </FormContainer>
      </LoginFormContainer>
    </MainContainer>
  );
}
