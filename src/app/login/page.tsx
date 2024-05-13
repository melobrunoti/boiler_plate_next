'use client';

export default function Login() {
  /*   const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['segments'],
    queryFn: () =>
      getSegments().then((res: any) => {
        return res.json();
      }),
  });

  if (isLoading || !data) {
    return <div>loading...</div>;
  } */

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Login page</h1>
      {/*    {data.data.map((segment: any) => {
        return (
          <div key={segment.ID} style={{ marginBottom: '1rem' }}>
            <h2>{segment.DESCRICAO_PRODUTO}</h2>
            <span>ID SEGMENTO: {segment.ID_SEGMENTO}</span>
          </div>
        );
      })} */}
    </div>
  );
}
