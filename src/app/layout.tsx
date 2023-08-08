import './globals.css';
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GEVAC GLOBAL SERVICES LTD',
  description: 'The Company was formed to provide expert indigenous services to support local and foreign firms operating within the shores of Nigeria.',
  icons: {icon: '/logo.png'}
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
