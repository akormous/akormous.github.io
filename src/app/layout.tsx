import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akshat Chauhan',
  description: 'Portfolio - Akshat Chauhan - Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
