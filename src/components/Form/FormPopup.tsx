'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import Image from 'next/image'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { initFadeIn } from '~/hook/Animation'

const FormPopup = () => {
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
    service: 'Thành lập công ty TNHH 1 thành viên',
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
  useEffect(() => {
    initFadeIn()
  }, [])
  return (
    <div className='bg-contact max-w-[795px] rounded-[20px]'>
      <div className='flex justify-center pt-2'>
        <Image src='/logo-dark.png' alt='logoSupcom' width={200} height={160} />
      </div>
      <h1 className='text-white text-center text-2xl p-2 uppercase'>Đăng ký nhận tư vấn</h1>
      {/*<div className='flex justify-center items-center pt-6'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
        >
          <Image
            src='/img/thusc.png'
            width={360}
            height={360}
            quality={100}
            alt='Banner Supcom'
            className='
        object-contain drop-shadow-[0_20px_35px_rgba(255,255,255,0.45)]
        w-[250px] h-[250px]
        md:w-[260px] md:h-[260px]
        lg:w-[360px] lg:h-[360px]
      '
          />
        </motion.div>
      </div>*/}
      <div className='fade fade-down-to-up'>
        <div className='drop-shadow-[0_0_28px_rgba(255,255,255,0.5)]       md:drop-shadow-[0_0_45px_rgba(255,255,255,0.5)]'>
          {/* layer cho shadow */}

          <div className='flex justify-between mx-5 '>
            <div className='flex flex-col justify-center gap-2 text-[8px] md:text-[13px] font-bold'>
              <div className='flex items-center gap-1 md:gap-2 px-2 py-2 rounded-full bg-white/10 text-white border border-white/20'>
                <CheckCircleIcon
                  sx={{ color: '#00b300', background: 'white', borderRadius: '100%' }}
                  className='mr-2 inline'
                />

                <span>Thành lập doanh nghiệp trọn gói, không phát sinh chi phí</span>
              </div>

              <div className='flex items-center gap-1 md:gap-2 px-2 py-2 rounded-full bg-white/10 text-white border border-white/20'>
                <CheckCircleIcon
                  sx={{ color: '#00b300', background: 'white', borderRadius: '100%' }}
                  className='mr-2 inline'
                />{' '}
                <span>Tư vấn pháp lý - Soạn hồ sơ thành lập - Tư vấn kế toán & thuế</span>
              </div>

              <div className='flex items-center gap-1 md:gap-2 px-2 py-2 rounded-full bg-white/10 text-white border border-white/20'>
                <CheckCircleIcon
                  sx={{ color: '#00b300', background: 'white', borderRadius: '100%' }}
                  className='mr-2 inline'
                />{' '}
                <span>Nhanh – Gọn – Chuẩn luật</span>
              </div>
            </div>
            <Image
              width={1000}
              height={1000}
              src='/img/thusc.png'
              alt='Banner Supcom'
              className='
          object-contain 
          w-[150px] h-[150px]
          md:w-[200px] md:h-[200px]
          lg:w-[230px] lg:h-[230px]
        '
            />
          </div>
        </div>
      </div>
      <form id='contact' className='w-full pt-1 px-3 rounded-[20px] flex flex-col gap-5' onSubmit={handleSubmit}>
        <div className=''>
          <Grid container spacing={{ xs: 1, md: 1 }}>
            <Grid size={{ xs: 12, md: 6 }}>
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
              <Select
                sx={{
                  borderRadius: '24px',
                  padding: '10px 3px'
                }}
                id='service'
                name='service'
                className='bg-white w-full h-10 md:h-10'
                value={formData.service}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    service: e.target.value
                  }))
                }
              >
                <MenuItem value='Thành lập công ty TNHH 1 thành viên'>Thành lập công ty TNHH 1 thành viên</MenuItem>
                <MenuItem value='Thành lập công ty TNHH 2 thành viên'>Thành lập công ty TNHH 2 thành viên</MenuItem>
                <MenuItem value='Thành lập công ty Cổ phần'>Thành lập công ty Cổ phần</MenuItem>
                <MenuItem value='Thành lập hợp tác xã'>Thành lập hợp tác xã</MenuItem>
                <MenuItem value='Dịch vụ kế toán'>Dịch vụ kế toán</MenuItem>
              </Select>
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

export default FormPopup
