'use client'
import React, { useState } from 'react'
import { Button, Grid, Input, MenuItem, Select } from '@mui/material'
// import { EmblaCarousel } from '~/components/carousel/MainCarousel'
// import { FeedbackCarousel } from '../carousel/FeedbackCarousel'

const FormContact = () => {
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

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }
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
    <div className=' m-3 md:m-5 bg-gray-50 rounded-[20px] '>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 7 }}>
          <div className=''></div>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <form
            id='contact'
            className='bg-contact p-10  min-h-100 md:min-h-125 rounded-[20px] flex flex-col gap-5'
            onSubmit={handleSubmit}
          >
            <div className='text-white text-xl text-center mb-4 uppercase font-bold'>
              <h1>Đăng ký để nhận tư vấn</h1>
            </div>

            <span className='text-white mx-2 block'>Thông tin cá nhân</span>
            <label htmlFor='name' className='sr-only'>
              Họ và tên
            </label>
            <Input
              required
              id='name'
              name='name'
              autoComplete='name'
              placeholder='Họ và tên'
              className='bg-white w-full h-12 p-2 rounded-xl'
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value
                }))
              }
            />
            <label htmlFor='name' className='sr-only'>
              Số điện thoại
            </label>
            <Input
              required
              id='phone'
              name='phone'
              autoComplete='phone'
              placeholder='Số điện thoại'
              className='bg-white w-full h-12 p-2 rounded-xl'
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phone: e.target.value
                }))
              }
            />
            <span className='text-white mx-2 block'>Dịch vụ cần tư vấn</span>
            <Select
              sx={{
                borderRadius: '12px'
              }}
              className='bg-white w-full h-12 p-2 rounded-xl'
              value={formData.service}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  service: e.target.value
                }))
              }
            >
              <MenuItem value='Thành lập công ty'>Thành lập công ty</MenuItem>
              <MenuItem value='Kế toán thuế'>Kế toán thuế</MenuItem>
              <MenuItem value='Thay đổi GPKD'>Thay đổi giấy phép kinh doanh</MenuItem>
            </Select>

            <textarea
              id='note'
              name='note'
              placeholder='Ghi chú'
              className='bg-white w-full h-28 p-2 resize-none rounded-xl'
              value={formData.note}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  note: e.target.value
                }))
              }
            />

            <Button
              fullWidth
              type='submit'
              variant='contained'
              size='large'
              sx={{
                marginTop: '10px',
                padding: '.8rem 0',
                bgcolor: '#007cf2',
                color: 'white',
                textTransform: 'uppercase',
                borderRadius: '12px'
              }}
            >
              đăng ký
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default FormContact
