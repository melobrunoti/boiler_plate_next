'use client';

import Login from '@/components/login';

export default function LoginPage() {
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

  return <Login />;
}
