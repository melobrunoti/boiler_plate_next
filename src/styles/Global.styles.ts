import SideBar from '@/components/ui/sideBar';
import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
`;

export const SideContainer = styled.div`
  width: 300px;
  background-color: aliceblue;
  display: flex;
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

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
