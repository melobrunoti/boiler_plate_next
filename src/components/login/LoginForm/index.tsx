'use client';
import React, { useEffect, useState } from 'react';
import { CircularProgress, TextField, circularProgressClasses } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FormContainer, FormLogoConainer } from './LoginForm.styles';
import Logo from '@/components/_ui/Logo';
import PrimaryButton from '@/components/_ui/Buttons/PrimaryButton';
import SecondaryButton from '@/components/_ui/Buttons/SecondaryButton';
import { cpfCnpjMask, removeCpfCnpjMask } from '@/utils/masks';
import { loginRequestAuthQuery, loginRequestTokenQuery } from '@/api/home/queries';
import { db } from '@/db/db.model';
import { useTokenClientStore } from '@/store/loanSimulation';
import { useForm } from 'react-hook-form';
import { getClientTokenQuery } from '@/api/loanSimulation/queries';

export default function LoginForm() {
  
  
  const { } = getClientTokenQuery()
  const router  = useRouter()
  const [user, setUser] = useState({ CPFCNPJ: '', SENHA: '' });
  const [dataSubmit, setDataSubmit ] = useState(undefined)
  const {token} = useTokenClientStore()
  const {handleSubmit, register} =  useForm()
  const [userToken, setUserToken ] = useState(undefined as undefined|string)

  const { data:uToken, isFetching: loadingToken, refetch } = loginRequestTokenQuery(token, JSON.stringify(dataSubmit))
  
  useEffect(()=>{ 
    if(uToken?.data ){ 
      setUserToken(JSON.stringify({document_client: dataSubmit?.client_key , token: uToken.data }))
    }
  },[uToken])
  
  const {data, isFetching: loadingAuth } = loginRequestAuthQuery(token, userToken)
  
  useEffect(()=> {
    if(data?.token){
      const partTokenBase64 = data.token.split(".")[1];
      const payloadToken = JSON.parse(atob(partTokenBase64))
      try{
        db.AuthTable.add({id:1, token:data.token, createdAt: payloadToken.iat, expiresAt: payloadToken.exp})
        router.push("/home")
      }catch(error){ 
        
      }
    };
  },[data?.token])
  
  useEffect(()=> { 
    db.AuthTable.get(1).then((value)=> value?.token &&
    router.push("/home")
  )
  },[])

  function submit(dataSubmitForm: any ){ 
    setDataSubmit({...dataSubmitForm, client_key: removeCpfCnpjMask(dataSubmitForm.client_key) })
    refetch();
  }

  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <FormLogoConainer>
        <Logo />
      </FormLogoConainer>
      <div>
        <p>Seja bem vindo(a)</p>
        <h2>CDC Bank</h2>
      </div>
      <TextField
        {...register("client_key")}
        onChange={(e) => setUser({ ...user, CPFCNPJ: removeCpfCnpjMask(e.target.value) })}
        value={cpfCnpjMask(user.CPFCNPJ)}
        required
        type="text"
        label="CPFCNPJ"

      />
      <TextField
        {...register("client_secret")}
        value={user.SENHA}
        required
        onChange={(e) => setUser({ ...user, SENHA: e.target.value })}
        type="password"
        label="Senha"
      />
      <PrimaryButton type="submit" disabled={loadingToken||loadingAuth} > {loadingToken || loadingAuth ? (<CircularProgress sx={{height: "50%", width:"50%"}} />):"Entrar" } </PrimaryButton>
      <SecondaryButton>Primeiro acesso</SecondaryButton>
    </FormContainer>
  );
}
