import { Josefin_Sans, Nunito } from 'next/font/google';

const josefinSans = Josefin_Sans({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
});

const nunito = Nunito({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
});

export { josefinSans, nunito };
