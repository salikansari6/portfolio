'use client';
import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="py-20 xl:py-24 2xl:py-10 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
