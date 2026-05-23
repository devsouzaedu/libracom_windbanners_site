import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://libracomwindbanner.com.br'),
  title: "Wind Banner, Roll Up, Adesivos e Lonas em Barueri | Libracom - Entrega 24h",
  description: "Especialistas em Wind Banner personalizado, Roll Up, Adesivos, Banners, Faixas e Lonas em Barueri e Alphaville. Impressão digital Ultra HD. Arte grátis. Entrega em 24 horas!",
  keywords: "wind banner em barueri, roll up personalizado barueri, adesivo personalizado alphaville, banner personalizado barueri, lona impressa barueri, faixa promocional barueri, bandeira de vento barueri, wind banner alphaville, comprar wind banner barueri, wind banner personalizado sp, impressão de wind banner barueri, bandeira promocional barueri, empresa de wind banner barueri, onde comprar wind banner em barueri, wind banner para eventos barueri, preço de wind banner personalizado, roll up banner para feiras, adesivo vinil personalizado, comunicação visual barueri",
  openGraph: {
    title: "Wind Banner, Roll Up, Adesivos e Lonas | Libracom Barueri - Entrega 24h",
    description: "Wind Banners, Roll Ups, Adesivos, Faixas e Lonas personalizados para sua empresa e eventos. Impressão Ultra HD direto de fábrica. Entrega rápida em Barueri e Alphaville.",
    url: 'https://libracomwindbanner.com.br',
    siteName: 'Libracom - Comunicação Visual',
    images: [
      {
        url: '/images/wind_banner_sitebg.webp',
        width: 1200,
        height: 630,
        alt: 'Wind Banner personalizado em Barueri e Alphaville - Libracom',
      },
      {
        url: '/images/wind_banner_mpd.jpeg',
        width: 1200,
        height: 630,
        alt: 'Wind Banner de alta qualidade para eventos e empresas',
      },
      {
        url: '/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png',
        width: 1200,
        height: 630,
        alt: 'Roll Up Banner personalizado em Barueri e Alphaville',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wind Banner, Roll Up, Adesivos e Lonas | Libracom Barueri",
    description: "Comunicação visual completa: Wind Banners, Roll Ups, Adesivos, Faixas e Lonas personalizados com entrega em 24h.",
    images: ['/images/wind_banner_sitebg.webp'],
    creator: '@libracom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: ['/favicon.ico'],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'google-site-verification',
  },
  alternates: {
    canonical: 'https://libracomwindbanner.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
