'use client';

import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';
import { createTheme } from '@mui/material/styles';
import '@/styles/global.css';
import { MainContainer, PageContainer } from '@/styles/Global.styles';

import SideBar from '@/components/_ui/SideBar';
import Header from '@/components/_ui/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });

  return (
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
  );
}
