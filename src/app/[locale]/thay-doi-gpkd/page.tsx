'use client'
import PersonIcon from '@mui/icons-material/Person'
import GroupIcon from '@mui/icons-material/Group'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import BusinessIcon from '@mui/icons-material/Business'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { initFadeIn } from '~/hook/Animation'
import PopupContact from '~/components/Form/PopupContact'

const changeServices = [
  {
    title: 'Thay đổi người đại diện pháp luật',
    desc: 'Thực hiện thủ tục thay đổi người đại diện pháp luật nhanh chóng, đúng quy định.',
    icon: <PersonIcon fontSize='large' />
  },
  {
    title: 'Thay đổi thành viên / cổ đông',
    desc: 'Cập nhật thông tin thành viên, cổ đông chính xác theo hồ sơ pháp lý.',
    icon: <GroupIcon fontSize='large' />
  },
  {
    title: 'Tăng / giảm vốn điều lệ',
    desc: 'Hỗ trợ điều chỉnh vốn điều lệ phù hợp với hoạt động kinh doanh.',
    icon: <TrendingUpIcon fontSize='large' />
  },
  {
    title: 'Thay đổi tên công ty',
    desc: 'Đổi tên doanh nghiệp nhanh gọn, không gián đoạn hoạt động.',
    icon: <BusinessIcon fontSize='large' />
  },
  {
    title: 'Thay đổi loại hình doanh nghiệp',
    desc: 'Chuyển đổi loại hình doanh nghiệp đúng luật và tối ưu chi phí.',
    icon: <SwapHorizIcon fontSize='large' />
  },
  {
    title: 'Thay đổi địa chỉ công ty',
    desc: 'Hỗ trợ thay đổi địa chỉ trụ sở chính, chi nhánh, văn phòng đại diện.',
    icon: <LocationOnIcon fontSize='large' />
  }
]

export default function ChangeLicenseSection() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    initFadeIn()
  }, [])
  return (
    <section className='pb-12 bg-linear-to-b from-blue-50 to-white'>
      <PopupContact open={open} onClose={() => setOpen(false)} />

      <div className='max-w-7xl mx-auto  md:px-10'>
        <div className='bg-blue-900 text-white py-10 rounded-br-3xl rounded-bl-3xl'>
          <h1 className='text-center text-2xl md:text-3xl font-bold  uppercase'>
            Dịch vụ thay đổi giấy phép kinh doanh
          </h1>
          <p className='mt-4 text-center  max-w-3xl mx-auto'>
            Chúng tôi cung cấp dịch vụ thay đổi giấy phép kinh doanh trọn gói, đảm bảo nhanh chóng – chính xác – đúng
            quy định pháp luật.
          </p>
          <div className='mt-14 text-center'>
            <Button
              onClick={() => setOpen(true)}
              size='large'
              className='bg-blue-600! text-white! hover:bg-blue-700! px-10 py-3 rounded-full'
            >
              Liên hệ chúng tôi
            </Button>
          </div>
        </div>
        <div className='mt-12 grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {changeServices.map((item, index) => (
            <article
              key={index}
              className='
                fade fade-up-to-down
                bg-white
                rounded-2xl
                p-8
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                flex
                flex-col
                group
              '
            >
              <div className='w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all'>
                {item.icon}
              </div>
              <h3 className='mt-5 text-lg font-semibold text-blue-900'>{item.title}</h3>
              <p className='mt-3 text-gray-600'>{item.desc}</p>
              <Button
                onClick={() => setOpen(true)}
                className='
                  mt-auto
                  self-start
                  text-blue-600!
                  font-medium
                  hover:underline
                '
              >
                Tư vấn chi tiết →
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
