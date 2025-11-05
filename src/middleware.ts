// import createMiddleware from 'next-intl/middleware'
// import { defineRouting } from 'next-intl/routing'

// export default createMiddleware(defineRouting({
//   locales: ['en', 'vi'],
//   defaultLocale: 'vi',
//   localePrefix: 'always'
// }))

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)']
// }

import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from '~/i18n/request'

console.log('🧩 middleware.ts LOADED')

const middleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
})

export default function (req: any) {
  console.log('🔥 Middleware RUNNING on:', req.nextUrl.pathname)
  return middleware(req)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
