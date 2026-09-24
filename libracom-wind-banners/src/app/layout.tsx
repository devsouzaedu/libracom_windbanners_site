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
  title: "Wind Banner Retangular e Quadrado em Barueri | Libracom - Modelo Reto",
  description: "Especialistas em Wind Banner Retangular e Quadrado (Modelo Reto) em Barueri e Alphaville. Tecido premium com 20% de transparência, haste e base inclusas. Arte grátis e entrega rápida!",
  keywords: "wind banner retangular, wind banner quadrado, wind banner reto, wind banner em barueri, wind banner personalizado, bandeira de vento, comprar wind banner barueri, wind banner alphaville, preço wind banner reto, wind banner completo, wind banner 2m, wind banner 2.6m, wind banner 3m, libracom wind banners, bandeira personalizada barueri, wind banner são paulo, wind banner barueri, wind banner reto",
  openGraph: {
    title: "Wind Banner Retangular e Quadrado | Libracom Barueri - Modelo Reto",
    description: "Wind Banners Retangulares e Quadrados (Modelo Reto) para destacar o seu comércio ou evento. Impressão Ultra HD direto de fábrica. Tecido premium 20% de transparência.",
    url: 'https://libracomwindbanner.com.br',
    siteName: 'Libracom - Wind Banners',
    images: [
      {
        url: '/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png',
        width: 1200,
        height: 630,
        alt: 'Wind Banner Retangular e Quadrado em Barueri e Alphaville - Libracom',
      },
      {
        url: '/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (2).jpg',
        width: 1200,
        height: 630,
        alt: 'Wind Banner Modelo Reto para eventos e empresas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wind Banner Retangular e Quadrado | Libracom Barueri",
    description: "Modelos Retos de Wind Banner (Retangular/Quadrado) personalizados com alta definição de cores e entrega rápida.",
    images: ['/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png'],
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
