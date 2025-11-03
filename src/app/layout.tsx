import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import NavBar from '~/app/components/NavBar'
import { Metadata } from 'next'
import Footer from './components/Footer'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning suppressContentEditableWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <NavBar />
          <div className='mt-16'>{children}</div>
          <Footer />
        </ThemeProvider>
        {/* <div>
          <NavBar />
          <div className='mt-16'>{children}</div>
        </div> */}
      </body>
    </html>
  )
}
