'use client'
import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// const DotLotti = ({ src, loop, autoplay }: { src: string; loop: boolean; autoplay: boolean }) => {
//   return <DotLottieReact path={src} loop={loop} autoplay={autoplay} style={{ width: '100%', height: '150px' }} />
// }

const FormPopupTldn = () => {
  interface CustomerFormData {
    name: string
    phone: string
    service: string
    note: string
    date: string
  }
  const [formData, setFormData] = useState<CustomerFormData>({
    name: '',
    phone: '',
    service: 'Thành lập công ty',
    note: '',
    date: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  // const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     service: e.target.value
  //   }))
  // }

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
        'https://script.google.com/macros/s/AKfycbxGd4CYcB3enLBpOWl1WHnYikaOJcYpjuaeIo_p_WTMq3xyetcKnJcSwo_BYMdtltxgqg/exec',
        {
          method: 'POST',
          body: formBody.toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

      alert('Đăng ký thành công!')
      setFormData({ name: '', phone: '', service: 'Thành lập công ty', note: '', date: '' })
      // handleClose()
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Lỗi kết nối tới Google Sheets.')
    }
  }
  return (
    <div className='bg-[url("/img/imgpu.jpg")] bg-cover bg-center bg-no-repeat max-w-198.75 rounded-[20px] p-10'>
      <form id='contact' className='w-full pt-1 px-3 rounded-[20px] flex flex-col gap-5' onSubmit={handleSubmit}>
        <h1 className='md:text-xl text-center font-bold uppercase bg-linear-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]'>
          đăng kí để nhận ngay gói kê khai thuế miễn phí
        </h1>

        <div className=''>
          <Grid container spacing={{ xs: 1, md: 1 }}>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                required
                id='name'
                name='name'
                placeholder='Họ và tên'
                value={formData.name}
                onChange={handleChange}
                fullWidth
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 40,
                    borderRadius: '24px',
                    backgroundColor: '#fff',

                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.2)'
                    },

                    '&:hover fieldset': {
                      borderColor: '#1976d2'
                    },

                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2'
                    }
                  },

                  '& input': {
                    padding: '0 16px'
                  }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
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
                    height: 40,
                    borderRadius: '24px',
                    backgroundColor: '#fff',

                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.2)'
                    },

                    '&:hover fieldset': {
                      borderColor: '#1976d2'
                    },

                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2'
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
        <div className='flex justify-center mb-2'>
          <Button
            type='submit'
            variant='contained'
            size='small'
            sx={{
              border: '2px solid white',
              padding: '0.5rem 1rem',
              bgcolor: '#007cf2',
              color: 'white',
              textTransform: 'uppercase',
              borderRadius: '24px'
            }}
          >
            Gửi thông tin
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormPopupTldn
