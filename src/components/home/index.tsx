import { MainContent } from '@/styles/Global.styles';
import React, { useEffect } from 'react';
import MainTable from '../ui/mainTable';
import { getBanks } from '@/api/home/fetchers';
import { useQuery } from '@tanstack/react-query';
import HomeBanksTable from './HomeBanksTable';

export default function Home() {
  return (
    <MainContent>
      <HomeBanksTable />
    </MainContent>
  );
}
