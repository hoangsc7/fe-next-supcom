// import { redirect } from 'next/navigation'

// export default function RootRedirect() {
//   // const lang = typeof navigator !== 'undefined' && navigator.language.startsWith('vi') ? 'vi' : 'en'
//   // redirect(`/${lang}`)
//   // redirect('vi')

// }

import { redirect } from 'next/navigation'
import { routing } from '~/i18n/routing'

export default function RootPage() {
  // Redirect root to default locale
  redirect(`/${routing.defaultLocale}`)
}
