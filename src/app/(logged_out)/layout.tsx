import RootLayout from '@/components/_ui/RootLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  //your other metadata
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootLayout>{children}</RootLayout>
    </>
  );
}
