'use client';
import Header from '@/components/_ui/Header';
import SideBar from '@/components/_ui/SideBar';
import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';
import '@/styles/global.css';
import { MainContainer, PageContainer } from '@/styles/Global.styles';
import StyledComponentsRegistry from '../registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="pt">
        <body>
          <StyledComponentsRegistry>
            <MainContainer>
              <SideBar />
              <PageContainer>
                <Header />
                {children}
              </PageContainer>
            </MainContainer>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
