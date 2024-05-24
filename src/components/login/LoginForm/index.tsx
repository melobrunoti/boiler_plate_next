'use client';
import React, { useState } from 'react';

import { useUserStore } from '@/store/user';
import { userStoreInterface } from '@/store/user/types';

import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FormContainer } from './LoginForm.styles';

export default function LoginForm() {
  const setEmailGlobal = useUserStore(
    (state: userStoreInterface) => state.setUserEmail
  );

  const [user, setUser] = useState({ email: '', password: '' });
  const router = useRouter();

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem('email', user.email);
    setEmailGlobal(user.email);
    router.push('/home');
  }
  return (
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
  );
}
