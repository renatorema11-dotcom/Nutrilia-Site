import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AiWidget } from '@/components/AiWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'NutriAli | Precision Wellness',
  description: 'Precision Nutrition for the Human Sanctuary.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <AiWidget />
      </body>
    </html>
  );
}
