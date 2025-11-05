import { ThemeProvider } from 'next-themes'
import '../globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import NavBar from '~/app/components/NavBar'
import { Metadata } from 'next'

import Image from 'next/image'
import Footer from '../components/Footer'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import en from '~/messages/en.json'
import vi from '~/messages/vi.json'
import { locales } from '~/i18n/request'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Supcom Việt Nam',
  description: ''
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale as any)) notFound()

  const messages = { en, vi }[locale as 'en' | 'vi']

  return (
    <html lang={locale} suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NavBar />
            <div className='mt-16'> {children}</div>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
        {/* <div>
          <NavBar />
          <div className='mt-16'>{children}</div>
        </div> */}
        <div className='fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50'>
          <a
            href='tel:0981926180'
            className='w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform'
          >
            📞
          </a>

          <a
            href='https://zalo.me/0123456789'
            target='_blank'
            rel='noopener noreferrer'
            className='w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform'
          >
            <Image src='/icon/zalo-icon.png' alt='Zalo' width={32} height={32} className='object-contain' />
          </a>
        </div>
      </body>
    </html>
  )
}
