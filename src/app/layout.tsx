import type { Metadata } from 'next';
import { Inter, Noto_Sans_Sinhala } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  display: 'swap',
  variable: '--font-noto-sinhala',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Lahiru Kumarasinghe',
    default: 'Lahiru Kumarasinghe — Automotive Technician, Designer & Creator',
  },
  description:
    'Personal website of Lahiru Kumarasinghe — automotive technician, UI/UX designer, embedded systems enthusiast, and creator building a multi-service automotive brand.',
  keywords: [
    'Lahiru Kumarasinghe',
    'Automotive Technician',
    'UI/UX Designer',
    'Sri Lanka',
    'ESP32',
    'Figma',
    'Web Developer',
  ],
  authors: [{ name: 'Lahiru Kumarasinghe' }],
  creator: 'Lahiru Kumarasinghe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lahirukumarasinghe.com',
    siteName: 'Lahiru Kumarasinghe',
    title: 'Lahiru Kumarasinghe — Automotive Technician, Designer & Creator',
    description:
      'Personal website of Lahiru Kumarasinghe — automotive technician, UI/UX designer, embedded systems enthusiast, and creator.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lahiru Kumarasinghe — Automotive Technician, Designer & Creator',
    description: 'Automotive • Design • Tech • Sri Lanka',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSinhala.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-surface-DEFAULT dark:bg-surface-dark text-ink-DEFAULT dark:text-ink-dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
