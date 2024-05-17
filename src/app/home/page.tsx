'use client';

import Home from '@/components/home';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sideBar';
import {
  FlexColumn,
  MainContainer,
  PageContainer,
  SideContainer,
} from '@/styles/Global.styles';

export default function HomePage() {
  return (
    <MainContainer>
      <SideContainer>
        <Sidebar />
      </SideContainer>

      <PageContainer>
        <Header />
        <Home />
      </PageContainer>
    </MainContainer>
  );
}
