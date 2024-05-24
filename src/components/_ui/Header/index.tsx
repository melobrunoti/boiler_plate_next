'use-client';
import React, { useEffect } from 'react';
import { HeaderContainer } from './Header.styles';
import { useUserStore } from '@/store/user';

export default function Header() {
  const email = useUserStore((state) => state.email);
  const setUserEmail = useUserStore((state) => state.setUserEmail);

  useEffect(() => {
    function getUserEmail() {
      if (email.length == 0) {
        setUserEmail(localStorage.getItem('email') ?? '');
      }
    }

    getUserEmail();
  }, [email.length, setUserEmail]);

  return (
    <HeaderContainer>
      <h2>Home</h2>
      <span>{email}</span>
    </HeaderContainer>
  );
}
