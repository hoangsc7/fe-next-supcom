import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ButtonMore = ({ href, name }: { href: string; name: string }) => {
  return (
    <div>
      <Link href={href}>
        <Button
          sx={{
            background: 'white',
            borderRadius: '50px',
            padding: '7px 14px',
            fontSize: { xs: '14px', md: '15px' },
            textTransform: 'none',
            color: 'black',
            '&:hover': {
              background: '#4d94ff',
              color: 'white'
            }
          }}
        >
          {name}
        </Button>
      </Link>
    </div>
  )
}

export default ButtonMore
