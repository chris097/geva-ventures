import './globals.css';
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GEVA VENTURES | Elevators, Escalators & Automatic Doors',
  description: 'GEVA VENTURES is a subsidiary of Gevac Global Services Ltd delivering modern elevator, escalator and automatic door solutions across Nigeria.',
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
