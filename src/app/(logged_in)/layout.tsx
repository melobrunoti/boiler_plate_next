'use client';

import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';
import '@/styles/global.css';
import { MainContainer, PageContainer } from '@/styles/Global.styles';
import SideBar from '@/components/_ui/SideBar';
import Header from '@/components/_ui/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from "../../styles/muiGlobal"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <ThemeProvider theme={theme}>
      <ReactQueryProvider>
        <html lang="pt">
          <body>
            <MainContainer>
              <SideBar />
              <PageContainer>
                <Header />
                {children}
              </PageContainer>
            </MainContainer>
          </body>
        </html>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
