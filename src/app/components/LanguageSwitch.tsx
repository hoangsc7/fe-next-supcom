'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const changeLocale = (lang: string) => {
    // Thay đổi prefix trong URL
    const segments = pathname.split('/')
    segments[1] = lang
    router.push(segments.join('/'))
  }

  return (
    <ul className='flex gap-2'>
      <li>
        <button onClick={() => changeLocale('en')} className={locale === 'en' ? 'font-bold text-blue-500' : ''}>
          EN
        </button>
      </li>
      <li>
        <button onClick={() => changeLocale('vi')} className={locale === 'vi' ? 'font-bold text-blue-500' : ''}>
          VI
        </button>
      </li>
    </ul>
  )
}
