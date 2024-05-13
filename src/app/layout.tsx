'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="pt">
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
