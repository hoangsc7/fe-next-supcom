import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Supcom Việt Nam',
    template: '%s - Supcom Việt Nam'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
