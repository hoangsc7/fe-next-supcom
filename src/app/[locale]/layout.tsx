import { ThemeProvider } from 'next-themes'
import '~/app/globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '~/i18n/request'
import Header from '../components/Header'
import { getMessages } from 'next-intl/server'
import ContactButton from '../components/Home/ContactButton'

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
    default: 'Supcom Việt Nam',
    template: '%s - Supcom Việt Nam'
  },
  description: 'Công ty chuyên về các dịch vụ doanh nghiệp'
}

export default async function RootLayoutLocale({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning suppressContentEditableWarning className='bg-root'>
      <body suppressHydrationWarning>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <div className='mt-18 flex justify-center'>{children}</div>
            <div className='flex justify-center'>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <ContactButton />
      </body>
    </html>
  )
}
