import { ThemeProvider } from 'next-themes'
import '~/app/globals.css'
import { Manrope } from 'next/font/google'
import { Metadata } from 'next'
import Footer from '../../components/Footer'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '~/i18n/request'
import Header from '../../components/Header'
import { getMessages } from 'next-intl/server'
import ContactButton from '../../components/Home/ContactButton'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  return {
    description: 'Dịch vụ thành lập công ty, chữ ký số, bảo hiểm xã hội,...',
    alternates: {
      canonical: `https://supcom.vn/${locale}`,
      languages: {
        vi: '/vi',
        en: '/en'
      }
    },
    openGraph: {
      locale: locale
    }
  }
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
    <html
      lang={locale}
      suppressHydrationWarning
      suppressContentEditableWarning
      className={manrope.className}
      data-scroll-behavior='smooth'
    >
      <body className='min-h-screen flex flex-col' suppressHydrationWarning>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className='flex-1 mt-18'>{children}</main>
            <div>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <ContactButton />
      </body>
    </html>
  )
}
