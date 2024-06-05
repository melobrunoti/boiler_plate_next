'use client';
import { MainContent } from '@/styles/Global.styles';
import HomeBanksTable from '@/components/home/HomeBanksTable';
import AuthToken from '@/components/_ui/auth/authComponent';

export default function Home() {
  return (
      <MainContent>
        <HomeBanksTable />
      </MainContent>
  );
}
