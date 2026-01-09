'use client'
import React, { useState, useEffect } from 'react'
import { Button, Input, MenuItem, Select } from '@mui/material'
// import { EmblaCarousel } from '~/components/carousel/MainCarousel'
// import { FeedbackCarousel } from '../carousel/FeedbackCarousel'

const FormContact1 = () => {
  interface CustomerFormData {
    name: string
    phone: string
    service: string
    note: string
    date: string
  }
  const [formData, setFormData] = useState<CustomerFormData | null>(null)

  // Đảm bảo state được khởi tạo sau khi client mount
  useEffect(() => {
    setFormData({
      name: '',
      phone: '',
      service: 'Thành lập công ty TNHH 1 thành viên',
      note: '',
      date: ''
    })
  }, [])

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
    if (!formData) return
    const today = new Date().toLocaleString('vi-VN', { hour12: false })
    const dataToSubmit = { ...formData, date: today }
    const formBody = new URLSearchParams()
    for (const key in dataToSubmit) {
      formBody.append(key, dataToSubmit[key as keyof CustomerFormData])
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
      setFormData({ name: '', phone: '', service: 'Thành lập công ty TNHH 1 thành viên', note: '', date: '' })
      // handleClose()
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Lỗi kết nối tới Google Sheets.')
    }
  }
  return (
    <div className='  rounded-[20px] '>
      <form
        id='contact'
        className='bg-contact p-5 md:mx-10 rounded-[20px] flex flex-col gap-2'
        onSubmit={handleSubmit}
        suppressHydrationWarning
      >
        <div className='text-white text-xl text-center mt-5 uppercase font-bold'>
          <h1>Đăng ký để nhận tư vấn</h1>
        </div>

        <span className='text-white mx-2 block'>Thông tin cá nhân</span>

        {formData && (
          <>
            <Input
              required
              id='name'
              name='name'
              aria-label='Họ và tên'
              autoComplete='name'
              placeholder='Họ và tên'
              className='bg-white w-full h-10 p-2 rounded-xl'
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev!,
                  name: e.target.value
                }))
              }
              suppressHydrationWarning
            />

            <Input
              required
              id='phone'
              name='phone'
              autoComplete='phone'
              aria-label='Số điện thoại'
              placeholder='Số điện thoại'
              className='bg-white w-full h-10 p-2 rounded-xl'
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev!,
                  phone: e.target.value
                }))
              }
              suppressHydrationWarning
            />
            <span className='text-white mx-2 block'>Dịch vụ cần tư vấn</span>
            <Select
              sx={{
                borderRadius: '12px',
                padding: '1px'
              }}
              className='bg-white w-full h-10 p-2 rounded-xl'
              value={formData.service}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev!,
                  service: e.target.value
                }))
              }
              suppressHydrationWarning
            >
              <MenuItem value='Thành lập công ty TNHH 1 thành viên'>Thành lập công ty TNHH 1 thành viên</MenuItem>
              <MenuItem value='Thành lập công ty TNHH 2 thành viên'>Thành lập công ty TNHH 2 thành viên</MenuItem>
              <MenuItem value='Thành lập công ty Cổ phần'>Thành lập công ty Cổ phần</MenuItem>
              <MenuItem value='Thành lập hợp tác xã'>Thành lập hợp tác xã</MenuItem>
              <MenuItem value='Dịch vụ kế toán'>Dịch vụ kế toán</MenuItem>
            </Select>

            <textarea
              id='note'
              name='note'
              aria-label='Ghi chú'
              placeholder='Ghi chú'
              className='bg-white w-full h-28 p-2 resize-none rounded-xl'
              value={formData.note}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev!,
                  note: e.target.value
                }))
              }
              suppressHydrationWarning
            />

            <Button
              fullWidth
              type='submit'
              variant='contained'
              size='large'
              sx={{
                padding: '.8rem 0',
                bgcolor: '#007cf2',
                color: 'white',
                textTransform: 'uppercase',
                borderRadius: '12px'
              }}
            >
              đăng ký ngay
            </Button>
          </>
        )}
      </form>
    </div>
  )
}

export default FormContact1
