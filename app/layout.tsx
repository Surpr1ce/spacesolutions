import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed',
});

export const metadata: Metadata = {
  title: 'SpaceSolutions | Medzinárodná stavebná spoločnosť',
  description: 'Váš spoľahlivý partner pre stavebné projekty po celom svete - od demolácie po vzduchotechniku',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="sk" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoCondensed.variable} font-sans scroll-smooth`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
      </body>
      </html>
  );
}