// 'use client'

import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className='flex flex-col items-center justify-center'>
      <button
        suppressHydrationWarning
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        className='px-2 py-1 rounded-lg bg-black text-white hover:bg-blue-600
        dark:bg-blue-500 dark:hover:bg-yellow-600 transition-colors duration-300'
      >
        <div>
          <span className='block w-full dark:hidden'>🌙</span>
          <span className='hidden w-full dark:block'>☀️</span>
        </div>
      </button>
    </div>
  )
}
