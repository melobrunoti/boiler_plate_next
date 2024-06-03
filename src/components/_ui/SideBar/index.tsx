import React, { useRef } from 'react';
import {
  DivBotton,
  DivTop,
  SideBarContainer,
  SideBarItem,
} from './SideBar.styles';
import LogoutIcon from '@mui/icons-material/Logout';
import LogoutModal from '../logoutModal';
import { useRouter } from 'next/navigation';
import { removeCookie } from '@/utils/removeCookies';
import { removeToken } from '@/utils/indexedDb';

export default function SideBar() {
  const [activeItem, setActiveItem] = React.useState('home')
  const [logoutOpen, setLogoutOpen] = React.useState(false);
  const router = useRouter();

  function handleClick(event:React.SyntheticEvent<EventTarget>) {

    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if(event.target.dataset.id){ 
      setActiveItem(event.target.dataset.id);
    }
  }

  function logOut() {
    removeToken().then(()=> router.push('/login'))
    
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
          <LogoutIcon data-testid="iconLogout" />
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
