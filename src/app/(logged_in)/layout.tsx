'use client';
import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';
import '@/styles/global.css';
import { MainContainer, PageContainer } from '@/styles/Global.styles';
import StyledComponentsRegistry from '../registry';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/db/db.model';

interface IProps {children: React.ReactNode;}

export default function RootLayout({children,}:IProps ) {

  async function verify(){
    try {
      const token = await db.AuthTable.get(1);
      const atualDate = Date.now() / 1000;
      
      if(token?.expiresAt! < atualDate ){ 
        db.AuthTable.delete(1);
        router.push("/login")
      }
    } catch (error) {
      router.push("/login")
    }
  }


  const router  = useRouter()
  useEffect(()=>{ 
    verify();
  })

  return (
    <ReactQueryProvider>
      <html lang="pt">
        <body>
          <StyledComponentsRegistry>
            <MainContainer>
              {children}
            </MainContainer>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
