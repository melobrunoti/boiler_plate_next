import SideBar from '@/components/_ui/SideBar';
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
  background-color: var(--primary-bg-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const SpanErros  = styled.span`
  padding: 0.3rem 0;
  color: red;
  font-size: 0.7rem ;

`