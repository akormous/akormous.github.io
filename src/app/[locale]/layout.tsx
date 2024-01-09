import { Metadata } from 'next'
import '../globals.css'
import { Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { localeList } from '@/data/localeSettings';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akshat Chauhan',
  description: 'Portfolio - Akshat Chauhan - Software Developer',
}

async function getTranslation(locale: string) {
  try {
    return (await import(`../../data/${locale}.json`)).default
  } catch(error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return localeList.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {

  const data = await getTranslation(locale);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.className}>
        <NextIntlClientProvider locale={locale} messages={data}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}