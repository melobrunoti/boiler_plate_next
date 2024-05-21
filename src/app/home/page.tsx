'use client';

import Home from '@/components/home';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sideBar';
import { MainContainer, PageContainer } from '@/styles/Global.styles';

export default function HomePage() {
  return (
    <MainContainer>
      <Sidebar />

      <PageContainer>
        <Header />
        <Home />
      </PageContainer>
    </MainContainer>
  );
}
