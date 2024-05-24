'use client';

import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';
import { createTheme } from '@mui/material';
import '@/styles/global.css';

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
