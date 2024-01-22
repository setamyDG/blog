import type { Metadata } from 'next';
import { Tektur } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const tektur = Tektur({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'SetamyDG Blog',
  description: 'Official blog of SetamyDG about web development and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={tektur.className}>
        <Navigation />
        <main className='mb-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
