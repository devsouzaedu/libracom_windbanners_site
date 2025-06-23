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
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://libracomwindbanner.com.br'),
  title: "Wind Banner em Barueri e Alphaville | Libracom - Entrega Rápida",
  description: "Especialistas em Wind Banner personalizado em Barueri e Alphaville. Bandeira de vento para eventos, feiras e ações promocionais. Entrega em 24 horas!",
  keywords: "wind banner em barueri, bandeira de vento barueri, wind banner alphaville, comprar wind banner barueri, wind banner personalizado sp, impressão de wind banner barueri, bandeira promocional barueri, empresa de wind banner barueri, onde comprar wind banner em barueri, wind banner para eventos barueri, preço de wind banner personalizado, modelo de wind banner pena, diferença entre wind banner e bandeira, qual wind banner dura mais, melhor tipo de banner para eventos externos, base para wind banner com água ou areia, banner de tecido para feiras, divulgação com bandeiras de vento, wind banner resistente ao vento, bandeira para marketing visual em barueri",
  openGraph: {
    title: "Wind Banner em Barueri e Alphaville | Entrega em 24h",
    description: "Wind Banners personalizados para sua empresa e eventos. Bandeiras de vento com melhor qualidade e resistência. Entrega rápida em Barueri e Alphaville.",
    url: 'https://libracomwindbanner.com.br',
    siteName: 'Libracom Wind Banners',
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
        url: '/images/backdrop_eventos_fundo_palco_banner.png',
        width: 1200,
        height: 630,
        alt: 'Backdrop e banners para eventos em Barueri',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wind Banner em Barueri e Alphaville | Entrega em 24h",
    description: "Wind Banners personalizados para sua empresa e eventos. Bandeiras de vento com melhor qualidade e resistência.",
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
