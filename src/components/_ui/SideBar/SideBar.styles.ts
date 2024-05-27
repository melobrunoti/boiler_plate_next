import styled from 'styled-components';

interface SideBarItemProps {
  active?: string;
}

export const SideBarContainer = styled.div`
  background-image: var(--menu-bg-gradient);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 300px;
`;

export const DivTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 300px;
`;
export const DivBotton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 300px;
`;

export const SideBarItem = styled.div<SideBarItemProps>`
  display: flex;
  align-items: center;
  color: white;
  padding: 1rem;
  font-weight: 500;
  background: ${(props) =>
    props.active === 'selected' ? 'var(--menu-hover-bg)' : ''};
  margin-bottom: 0.2rem;
  border-radius: 10px;
  padding: 15px 19px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: var(--menu-hover-bg);
  }
`;
