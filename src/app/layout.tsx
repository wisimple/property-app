import type { Metadata } from 'next';
import '@/styles/global.scss';
import { josefinSans, nunito } from '@/fonts';

export const metadata: Metadata = {
  title: 'Property App',
  description: 'Find your home',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${josefinSans.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
