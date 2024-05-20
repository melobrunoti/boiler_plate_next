import React, { useState } from 'react';
import {
  FormContainer,
  LoginFormContainer,
  LogoContainer,
  MainContainer,
} from './Login.styles';
import { useRouter } from 'next/navigation';
import { Button, TextField } from '@mui/material';
import LoginImg from '@/../public/images/LoginImg.jpg';
import { useUserStore } from '@/store/user/index';
import { userStoreInterface } from '@/store/user/types';

export default function Login() {
  const setEmailGlobal = useUserStore(
    (state: userStoreInterface) => state.setUserEmail
  );

  const [user, setUser] = useState({ email: '', password: '' });
  const router = useRouter();

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem('email', user.email);
    setEmailGlobal(user.email);
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
          <TextField
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            required
            type="email"
            label="E-mail"
          />
          <TextField
            value={user.password}
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            label="Senha"
          />
          <Button type="submit" variant="contained">
            Entrar
          </Button>{' '}
          <Button>Primeiro acesso</Button>
        </FormContainer>
      </LoginFormContainer>
    </MainContainer>
  );
}
