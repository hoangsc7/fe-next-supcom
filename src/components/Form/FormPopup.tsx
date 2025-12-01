'use client'
import React, { ChangeEvent, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { EmblaCarousel } from '~/components/carousel/MainCarousel'
import { FeedbackCarousel } from '../carousel/FeedbackCarousel'

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
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      service: e.target.value
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
    <div className='w-full max-w-[795px] rounded-[20px]'>
      <form
        id='contact'
        className=' w-full bg-contact p-10  min-h-[400px] md:min-h-[500px] rounded-[20px] flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <div className='text-white text-xl text-center mb-4 uppercase font-bold'></div>

        <div className='mt-[200px] md:mt-[350px]'>
          <Grid container spacing={{ xs: 1, md: 3 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <input
                required
                id='name'
                name='name'
                autoComplete='name'
                placeholder='Họ và tên'
                className='bg-white w-full h-10 md:h-12 p-4 rounded-3xl'
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <input
                required
                id='phone'
                name='phone'
                autoComplete='phone'
                placeholder='Số điện thoại'
                className='bg-white w-full h-10 md:h-12 p-4 rounded-3xl'
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <select
                id='service'
                name='service'
                className='bg-white w-full h-10 md:h-12 px-3 rounded-3xl'
                value={formData.service}
                onChange={handleSelectChange}
              >
                <option value='Thành lập công ty'>Thành lập công ty</option>
                <option value='Kế toán thuế'>Kế toán thuế</option>
                <option value='Thay đổi GPKD'>Thay đổi giấy phép kinh doanh</option>
              </select>
            </Grid>
          </Grid>
        </div>

        {/*<textarea
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
        />*/}

        <Button
          fullWidth
          type='submit'
          variant='contained'
          size='small'
          sx={{
            padding: '0.8rem 0',
            bgcolor: '#007cf2',
            color: 'white',
            textTransform: 'uppercase',
            borderRadius: '24px'
          }}
        >
          Nhận tư vấn ngay
        </Button>
      </form>
    </div>
  )
}

export default FormPopup
