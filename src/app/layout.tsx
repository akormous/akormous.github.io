import './globals.css'
import type { Metadata } from 'next'
import { Inter, Fugaz_One, Manrope } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const fugaz = Fugaz_One({ subsets: ['latin'], weight: "400" });
const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akshat Chauhan',
  description: 'Portfolio - Akshat Chauhan - Full-Stack Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
