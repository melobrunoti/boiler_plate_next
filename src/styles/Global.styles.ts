import SideBar from '@/components/ui/sideBar';
import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
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
`;

export const MainContent = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
