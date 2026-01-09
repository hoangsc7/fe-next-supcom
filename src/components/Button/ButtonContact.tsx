'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import PopupContact from '../Form/PopupContact'

const ButtonContact = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <Button
        onClick={() => setOpen(true)}
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
      <PopupContact open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default ButtonContact
