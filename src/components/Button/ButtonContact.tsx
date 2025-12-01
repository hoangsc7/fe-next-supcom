import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ButtonContact = () => {
  return (
    <div className='flex justify-center py-5 '>
      <Link href='#contact' passHref>
        <Button
          sx={{
            // background: 'linear-gradient(135deg, #000066 40%, #007cf2 100%)',
            background: '#000066',
            borderRadius: '50px',
            padding: '7px 14px',
            fontSize: { xs: '14px', md: '15px' },
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
