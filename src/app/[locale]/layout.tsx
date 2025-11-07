import { ThemeProvider } from 'next-themes'
import '../globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Metadata } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import en from '~/messages/en.json'
import vi from '~/messages/vi.json'
import { locales } from '~/i18n/request'
import Header from '../components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    default: 'Supcom Việt nam',
    template: '%s - Supcom Việt nam'
  },
  description: 'Công ty chuyên về các dịch vụ doanh nghiệp'
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // if (!locales.includes(locale as string)) notFound()

  const messages = { en, vi }[locale as 'en' | 'vi']

  return (
    <html lang={locale} suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <div className='mt-16'> {children}</div>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
        <div className='fixed bottom-10 right-6 flex flex-col items-center gap-3 z-50'>
          <a
            href='https://zalo.me/0981926180'
            target='_blank'
            rel='noopener noreferrer'
            className=' relative w-14 h-14 flex items-center justify-center bg-[#0068ff] text-white rounded-full shadow-lg hover:scale-110 transition-transform '
          >
            <span
              className='absolute inset-0 rounded-full bg-[#0068ff] opacity-75 z-0'
              style={{ animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            ></span>
            <Image src='/icon/zalo-logo1.png' alt='Zalo' width={40} height={40} className='object-contain z-10' />
          </a>
          <a
            href='https://zalo.me/0981926180'
            target='_blank'
            rel='noopener noreferrer'
            className=' relative w-14 h-14 flex items-center justify-center bg-mess-icon text-white rounded-full shadow-lg hover:scale-110 transition-transform '
          >
            <span
              className='absolute inset-0 rounded-full  bg-mess-icon opacity-75 z-0'
              style={{ animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            ></span>
            <Image src='/icon/mess-logo1.png' alt='Zalo' width={40} height={40} className='object-contain z-10' />
          </a>
          <a
            href='tel:0981926180'
            className='relative w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform '
          >
            <span
              className='absolute inset-0 rounded-full bg-green-500 opacity-75 z-0'
              style={{ animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            ></span>
            <span className='z-10'>📞</span>
          </a>
        </div>
      </body>
    </html>
  )
}
