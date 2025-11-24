import { Button } from '@mui/material'
import React from 'react'

const ButtonMore = () => {
  return (
    <div className='flex justify-center py-5'>
      <Button
        sx={{
          background: 'white',
          borderRadius: '50px',
          padding: '7px 14px',
          fontSize: { xs: '0.7rem', md: '1rem' },
          textTransform: 'none',
          color: 'black',
          '&:hover': {
            background: '#4d94ff',
            color: 'white'
          }
        }}
      >
        Tìm hiểu thêm
      </Button>
    </div>
  )
}

export default ButtonMore
