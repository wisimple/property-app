import type { Metadata } from 'next';
import './globals.css';
import { josefinSans, nunito } from '@/fonts';
import { SidebarTemplate } from '@/components/sidebar/template';
import { FooterTemplate } from '@/components/footer/template';

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
