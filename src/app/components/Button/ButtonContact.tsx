import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ButtonContact = () => {
  return (
    <div className='flex justify-center py-5'>
      <Link href='#quytrinh'>
        <Button
          sx={{
            background: '#000066',
            borderRadius: '50px',
            padding: '7px 14px',
            fontSize: { xs: '0.7rem', md: '1rem' },
            textTransform: 'none',
            color: 'white',
            '&:hover': {
              background: '#e60000'
            }
          }}
        >
          Nhận tư vấn ngay
        </Button>
      </Link>
    </div>
  )
}

export default ButtonContact
