import SideBar from '@/components/SideBar';
import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const MainContent = styled.div`
  padding: 1rem;
  background-color: #fff;
  width: 100%;
`;
