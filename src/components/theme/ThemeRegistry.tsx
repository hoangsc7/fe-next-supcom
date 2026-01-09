'use client'

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { useMemo } from 'react'

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // Tạo cache một lần duy nhất để tránh hydration mismatch
  const cache = useMemo(() => createCache({ key: 'mui', prepend: true }), [])

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
