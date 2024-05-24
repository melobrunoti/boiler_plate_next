import React, { useRef } from 'react';
import {
  DivBotton,
  DivTop,
  SideBarContainer,
  SideBarItem,
} from './SideBar.styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import LogoutModal from '../logoutModal';
import { useUserStore } from '@/store/user';
import { useRouter } from 'next/navigation';

export default function SideBar() {
  const [activeItem, setActiveItem] = React.useState('home');
  const [logoutOpen, setLogoutOpen] = React.useState(false);
  const resetEmail = useUserStore((state) => state.resetEmail);
  const router = useRouter();

  function handleClick(event: any) {
    setActiveItem(event.target.dataset.id);
  }

  function logOut() {
    localStorage.removeItem('email');
    resetEmail();
    router.push('/login');
  }

  return (
    <SideBarContainer>
      <DivTop>
        <SideBarItem
          active={activeItem === 'home' ? 'selected' : 'not-selected'}
          data-id="home"
          onClick={handleClick}
        >
          Home
        </SideBarItem>
        <SideBarItem
          active={activeItem === 'dashboard' ? 'selected' : 'not-selected'}
          data-id="dashboard"
          onClick={handleClick}
        >
          Dashboard
        </SideBarItem>
        <SideBarItem
          active={activeItem === 'vendas' ? 'selected' : 'not-selected'}
          data-id="vendas"
          onClick={handleClick}
        >
          Vendas
        </SideBarItem>
      </DivTop>

      <DivBotton>
        <SideBarItem onClick={() => setLogoutOpen(true)}>
          <LogoutIcon id="iconLogout" />
          Sair
        </SideBarItem>
      </DivBotton>
      <LogoutModal
        open={logoutOpen}
        handleClose={() => setLogoutOpen(false)}
        callback={() => logOut()}
      />
    </SideBarContainer>
  );
}
