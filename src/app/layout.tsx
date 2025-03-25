import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Libracom Wind Banners | Comunicação Visual em Barueri e Alphaville',
  description: 'Especialistas em Wind Banners e comunicação visual em Barueri e Alphaville. Wind banners personalizados de alta qualidade para sua marca.',
  keywords: 'wind banner, comunicação visual, banner, Barueri, Alphaville, wind flag, publicidade',
  authors: [{ name: 'Libracom' }],
  creator: 'Libracom',
  publisher: 'Libracom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#1E3A8A', // bg-blue-900
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://libracom.com.br',
    title: 'Libracom Wind Banners | Comunicação Visual em Barueri e Alphaville',
    description: 'Especialistas em Wind Banners e comunicação visual em Barueri e Alphaville. Wind banners personalizados de alta qualidade para sua marca.',
    siteName: 'Libracom Wind Banners',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Libracom Wind Banners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Libracom Wind Banners | Comunicação Visual em Barueri e Alphaville',
    description: 'Especialistas em Wind Banners e comunicação visual em Barueri e Alphaville',
    images: ['/twitter-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 