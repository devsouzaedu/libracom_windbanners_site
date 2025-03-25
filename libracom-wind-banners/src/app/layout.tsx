import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL('https://libracom.com.br'),
  title: "Libracom Wind Banners | Barueri e Alphaville - Banners Personalizados",
  description: "Especialistas em Wind Banners personalizados em Barueri e Alphaville. Todos os modelos e tamanhos disponíveis para sua empresa. Entrega rápida!",
  keywords: "wind banner, banner personalizado, barueri, alphaville, comunicação visual, publicidade externa, backdrop, totem, eventos",
  openGraph: {
    title: "Libracom Wind Banners | Barueri e Alphaville",
    description: "Wind Banners personalizados para sua empresa. Entrega em Barueri e região.",
    images: ["/images/wind_banner_sitebg.webp"],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
    canonical: 'https://libracom.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
