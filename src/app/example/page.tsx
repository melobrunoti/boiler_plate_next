'use client';

import { useQuery } from '@tanstack/react-query';
import { getSegments } from '../api-calls/segments';

export default function Example() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['segments'],
    queryFn: () =>
      getSegments().then((res) => {
        return res.json();
      }),
  });

  if (isLoading || !data) {
    return <div>loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {data.data.map((segment: any) => {
        return (
          <div key={segment.ID} style={{ marginBottom: '1rem' }}>
            <h2>{segment.DESCRICAO_PRODUTO}</h2>
            <span>ID SEGMENTO: {segment.ID_SEGMENTO}</span>
          </div>
        );
      })}
    </div>
  );
}
