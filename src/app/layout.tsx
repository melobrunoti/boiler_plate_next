'use client';

import { ReactQueryProvider } from '@/providers/query-client/ReactQueryProvider';
import { createTheme } from '@mui/material/styles';
import '@/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });

  return (
    <ReactQueryProvider>
      <html lang="pt">
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
