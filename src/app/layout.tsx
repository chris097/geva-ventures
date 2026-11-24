import './globals.css';
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GEVAC GLOBAL SERVICES | Elevators, Escalators & Automatic Doors',
  description: 'GEVAC GLOBAL SERVICES delivers modern elevator, escalator and automatic door solutions across Nigeria. Quality mobility systems for commercial and residential buildings.',
  keywords: ['Elevators in Nigeria', 'Escalators', 'Automatic Doors', 'Vertical Mobility', 'Gevac Global Services', 'Elevator Installation Port Harcourt', 'Elevator Maintenance Lagos'],
  openGraph: {
    title: 'GEVAC GLOBAL SERVICES | Elevators, Escalators & Automatic Doors',
    description: 'Nigeria\'s premier vertical mobility specialists. Delivering world-class elevator, escalator and automatic door installations and maintenance.',
    url: 'https://gevacglobalservicesltd.com',
    siteName: 'GEVAC GLOBAL SERVICES',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'GEVAC GLOBAL SERVICES - Modern Vertical Mobility',
      }
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEVAC GLOBAL SERVICES | Premium Vertical Mobility',
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
