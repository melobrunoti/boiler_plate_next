import { MainContent } from '@/styles/Global.styles';
import React, { useEffect } from 'react';
import MainTable from '../ui/mainTable';
import { getBanks } from '@/api/home/fetchers';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['getBanks'],
    queryFn: () =>
      getBanks().then((res: any) => {
        console.log(res.json());
        return res.json();
      }),
  });

  useEffect(() => {
    getBanks();
  }, []);

  return (
    <MainContent>
      <MainTable />
    </MainContent>
  );
}
