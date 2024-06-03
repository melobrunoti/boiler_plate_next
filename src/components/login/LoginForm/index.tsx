'use client';
import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FormContainer, FormLogoConainer } from './LoginForm.styles';
import Logo from '@/components/_ui/Logo';
import PrimaryButton from '@/components/_ui/Buttons/PrimaryButton';
import SecondaryButton from '@/components/_ui/Buttons/SecondaryButton';
import { cpfCnpjMask, removeCpfCnpjMask } from '@/utils/masks';
import { loginRequestMutation } from '@/api/home/queries';
import { getToken, initializeDB } from '@/utils/indexedDb';

export default function LoginForm() {
  useEffect(()=> { 
    initializeDB()     
     getToken().then((token)=>{  if(token ){ router.push('/home');}})

  })



  const [user, setUser] = useState({ CPFCNPJ: '', SENHA: '' });
  const router = useRouter();

  const mutation = loginRequestMutation()


function login(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  mutation.mutate(user);
}

  return (
    <FormContainer onSubmit={(e) => login(e)}>
      <FormLogoConainer>
        <Logo />
      </FormLogoConainer>
      <div>
        <p>Seja bem vindo(a)</p>
        <h2>CDC Bank</h2>
      </div>
      <TextField
        onChange={(e) => setUser({ ...user, CPFCNPJ: removeCpfCnpjMask(e.target.value) })}
        value={cpfCnpjMask(user.CPFCNPJ)}
        required
        type="text"
        label="CPFCNPJ"
      />
      <TextField
        value={user.SENHA}
        required
        onChange={(e) => setUser({ ...user, SENHA: e.target.value })}
        type="password"
        label="Senha"
      />
      <PrimaryButton callback={()=>login} type="submit" >Entrar</PrimaryButton>
      <SecondaryButton>Primeiro acesso</SecondaryButton>
    </FormContainer>
  );
}
