'use client'

import { Toolbar } from '@mui/material'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Headerss'), {
  ssr: false
})

export default function ClientHeader() {
  return (
    <div>
      <Header />
      <Toolbar />
    </div>
  )
}
