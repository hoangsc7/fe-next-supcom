'use client'
import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import Image from 'next/image'

const FormSearchName = () => {
  interface CustomerFormData {
    name: string
    phone: string
    date: string
  }
  const [formData, setFormData] = useState<CustomerFormData>({
    name: '',
    phone: '',
    date: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const today = new Date().toLocaleString('vi-VN', { hour12: false })
    formData.date = today
    const formBody = new URLSearchParams()
    for (const key in formData) {
      formBody.append(key, formData[key as keyof CustomerFormData])
    }

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyR4UamJTswipzgSxAoWo4kd5g8rzK-yMoRAp5jH8Jhe3BagJ5MsZ7Q2x7mEznUU5cN-Q/exec',
        {
          method: 'POST',
          body: formBody.toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

      alert('Đăng ký thành công!')
      setFormData({ name: '', phone: '', date: '' })
      // handleClose()
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Lỗi kết nối tới Google Sheets.')
    }
  }
  return (
    <div className='w-full bg-contact max-w-[795px] rounded-[20px]'>
      <div className='flex justify-center mt-2'>
        <Image src='/logo-dark.png' alt='logo dark' width={200} height={200} />
      </div>
      <form
        id='contact'
        className=' w-full px-10  min-h-[200px]  rounded-[20px] flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <div className='text-white text-[17px] md:text-xl text-center mb-2 uppercase font-bold'>
          Gửi thông tin tới chúng tôi
        </div>

        <div className=''>
          <Grid container spacing={{ xs: 1, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                id='name'
                name='name'
                placeholder='Tên công ty dự kiến'
                value={formData.name}
                onChange={handleChange}
                fullWidth
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: { xs: 40, md: 48 },
                    borderRadius: '24px',
                    backgroundColor: '#fff',
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.2)'
                    },

                    '&:hover fieldset': {
                      borderColor: '#00e5ff'
                    },

                    '&.Mui-focused fieldset': {
                      borderColor: '#00e5ff',
                      boxShadow: '0 0 10px rgba(0,229,255,0.8)'
                    }
                  },

                  '& input': {
                    padding: '0 16px'
                  }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                id='phone'
                name='phone'
                placeholder='Số điện thoại'
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: { xs: 40, md: 48 },
                    borderRadius: '24px',
                    backgroundColor: '#fff',

                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.2)'
                    },

                    '&:hover fieldset': {
                      borderColor: '#00e5ff'
                    },

                    '&.Mui-focused fieldset': {
                      borderColor: '#00e5ff',
                      boxShadow: '0 0 10px rgba(0,229,255,0.8)'
                    }
                  },

                  '& input': {
                    padding: '0 16px'
                  }
                }}
              />
            </Grid>
          </Grid>
        </div>
        <Button
          fullWidth
          type='submit'
          variant='contained'
          size='small'
          sx={{
            border: '2px solid white',
            padding: '0.6rem 0',
            bgcolor: '#007cf2',
            color: 'white',
            textTransform: 'uppercase',
            borderRadius: '24px'
          }}
        >
          Gửi
        </Button>
      </form>
    </div>
  )
}

export default FormSearchName
