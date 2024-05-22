import React, { useRef } from 'react';
import { SideBarContainer, SideBarItem } from './SideBar.styles';

export default function SideBar() {
  const [activeItem, setActiveItem] = React.useState('home');

  const handleClick = (event: any) => {
    setActiveItem(event.target.dataset.id);
  };

  return (
    <SideBarContainer>
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
    </SideBarContainer>
  );
}
