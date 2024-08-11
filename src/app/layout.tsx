import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Olive Bishop - Software Developer | Web Applications & Portfolio',
  description: 'Olive Bishop, a software developer from Mombasa, Kenya, crafts seamless web applications. Explore my portfolio featuring Next.js, Tailwind CSS, and more',
  keywords: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'React', 'web development', 'portfolio', 'Mombasa software developer'],
  metadataBase: new URL('https://hendrilgen.netlify.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE'
    }
  },
  openGraph: {
    title: 'Olive Bishop - Software Developer',
    description: 'Explore the portfolio of Olive Bishop, a software developer from Mombasa, Kenya.',
    images: '/og-image.png',
    url: 'https://hendrilgen.netlify.app',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:description" content="Explore the portfolio of Olive Bishop, a software developer from Mombasa, Kenya." />
        <meta property="og:url" content="https://hendrilgen.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
