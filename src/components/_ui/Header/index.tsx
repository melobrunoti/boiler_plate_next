'use-client';
import React, { useEffect } from 'react';
import { HeaderContainer } from './Header.styles';
import { useUserStore } from '@/store/user';
import { getCookie } from '@/utils/getCookies';

export default function Header() {
  const nome = useUserStore((state) => state.nome);
  const setUserNome = useUserStore((state) => state.setUserNome);

  useEffect(() => {
    function getUserNome() {
      if (nome.length == 0) {
        setUserNome(getCookie("nome") ?? '');
      }
    }

    getUserNome();
  }, [nome.length, setUserNome]);

  return (
    <HeaderContainer>
      <h2>Home</h2>
      <span>{nome}</span>
    </HeaderContainer>
  );
}
