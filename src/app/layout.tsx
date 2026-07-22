import './globals.css';
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GEVAC VENTURES | Elevators, Escalators & Automatic Doors',
  description: 'GEVAC VENTURES is a subsidiary of Gevac Global Services Ltd delivering modern elevator, escalator and automatic door solutions across Nigeria. Quality mobility systems for commercial and residential buildings.',
  keywords: ['Elevators in Nigeria', 'Escalators', 'Automatic Doors', 'Vertical Mobility', 'Gevac Global Services', 'Elevator Installation Port Harcourt', 'Elevator Maintenance Lagos'],
  openGraph: {
    title: 'GEVAC VENTURES | Elevators, Escalators & Automatic Doors',
    description: 'Nigeria\'s premier vertical mobility specialists. Delivering world-class elevator, escalator and automatic door installations and maintenance.',
    url: 'https://gevacglobalservicesltd.com',
    siteName: 'GEVAC VENTURES',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'GEVAC VENTURES - Modern Vertical Mobility',
      }
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEVAC VENTURES | Premium Vertical Mobility',
    description: 'Nigeria\'s premier vertical mobility specialists.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
