import RootLayout from '@/components/_ui/Layout';
import { Metadata } from 'next';
import { unstable_noStore } from 'next/cache';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  //your other metadata
};

export default function Layout({ children }: { children: React.ReactNode }) {
  unstable_noStore();
  return (
    <>
      <RootLayout>{children}</RootLayout>
    </>
  );
}
