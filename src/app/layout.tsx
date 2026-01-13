import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    default: 'Supcom Việt Nam',
    template: '%s - Supcom Việt Nam'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
