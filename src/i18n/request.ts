// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export const locales = ['en', 'vi'] as const
export const defaultLocale = 'vi'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  // console.log('📦 Locale hiện tại:', locale)

  // Fallback if locale is undefined
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  // console.log('📦 Locale hiện tại:', locale)

  return {
    locale,
    messages: (await import(`~/messages/${locale}.json`)).default
  }
})
