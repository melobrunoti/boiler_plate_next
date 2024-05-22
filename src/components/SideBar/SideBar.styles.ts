import styled from 'styled-components';

interface SideBarItemProps {
  active?: boolean;
}

export const SideBarContainer = styled.div`
  background-image: var(--menu-bg-gradient);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 300px;
  min-height: 100vh;
`;

export const SideBarItem = styled.div<SideBarItemProps>`
  color: white;
  padding: 1rem;
  font-weight: 500;
  background: ${(props) => (props.active ? 'var(--menu-hover-bg)' : '')};
  margin-bottom: 0.2rem;
  border-radius: 10px;
  padding: 15px 19px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: var(--menu-hover-bg);
  }
`;
