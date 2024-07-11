'use client';
import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';
import '@/styles/global.css';
import { MainContainer, PageContainer } from '@/styles/Global.styles';
import StyledComponentsRegistry from '../registry';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/db/db.model';
import { loggedUserStore } from '@/store/logged';

interface IProps {children: React.ReactNode;}

export default function RootLayout({children,}:IProps ) {
  
  const router  = useRouter()
  
  const {setLoggedUser} = loggedUserStore()
  async function verify(){
    try {
      const token = await db.AuthTable.get(1);
      const atualDate = Date.now() / 1000;

      
      
      if(token?.expiresAt! < atualDate || !token ){ 
        setLoggedUser({});
        db.AuthTable.delete(1);
        router.push("/welcome");
      }
    } catch (error) {
      router.push("/welcome")
    }
  }


  useEffect(()=>{ 
    verify();
  },[])

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
