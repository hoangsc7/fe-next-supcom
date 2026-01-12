'use client'

import SchoolIcon from '@mui/icons-material/School'
import PublicIcon from '@mui/icons-material/Public'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { initFadeIn } from '~/hook/Animation'

const licenseList = [
  {
    title: 'Giấy phép trung tâm ngoại ngữ',
    desc: 'Tư vấn, soạn hồ sơ và xin giấy phép thành lập trung tâm ngoại ngữ theo đúng quy định của Sở GD&ĐT.',
    icon: <SchoolIcon fontSize='large' />,
    link: '/trung-tam-ngoai-ngu'
  },
  {
    title: 'Giấy phép tư vấn du học',
    desc: 'Hỗ trợ xin giấy phép tư vấn du học nhanh chóng, đúng chuẩn Bộ Giáo dục & Đào tạo.',
    icon: <PublicIcon fontSize='large' />,
    link: '/giay-phep/tu-van-du-hoc'
  },
  {
    title: 'Giấy phép kinh doanh lữ hành',
    desc: 'Tư vấn điều kiện, ký quỹ và xin giấy phép lữ hành nội địa – quốc tế.',
    icon: <FlightTakeoffIcon fontSize='large' />,
    link: '/giay-phep/kinh-doanh-lu-hanh'
  },
  {
    title: 'Giấy phép bán lẻ rượu',
    desc: 'Xin giấy phép bán lẻ rượu đúng quy định, tránh rủi ro xử phạt hành chính.',
    icon: <LocalBarIcon fontSize='large' />,
    link: '/giay-phep/ban-le-ruou'
  }
]

const LicenseConsulting = () => {
  useEffect(() => {
    initFadeIn()
  }, [])
  return (
    <div>
      {/* HERO */}
      <section className='py-16 bg-linear-to-br from-blue-50 to-cyan-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-10 text-center'>
          <h1 className='text-2xl md:text-3xl font-bold uppercase text-blue-900'>Tư vấn & xin giấy phép kinh doanh</h1>
          <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
            Chúng tôi hỗ trợ tư vấn điều kiện, soạn hồ sơ và thực hiện thủ tục xin giấy phép nhanh chóng – đúng pháp
            luật – không phát sinh chi phí.
          </p>
        </div>
      </section>

      {/* LIST */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {licenseList.map((item, i) => (
              <article
                key={i}
                className='
                  fade fade-up-to-down
                  bg-white
                  p-8
                  rounded-xl
                  border
                  border-gray-100
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  flex
                  flex-col
                  justify-between
                '
              >
                <div>
                  <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4'>
                    {item.icon}
                  </div>

                  <h3 className='text-xl font-semibold text-blue-900'>{item.title}</h3>

                  <p className='mt-3 text-gray-600'>{item.desc}</p>
                </div>

                <div className='mt-6'>
                  <Button className='text-blue-600! hover:underline'>Tìm hiểu chi tiết →</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-14 bg-blue-900 text-white'>
        <div className='max-w-6xl mx-auto px-4 md:px-10 text-center'>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase'>Cần tư vấn giấy phép phù hợp?</h2>
          <p className='mt-3 text-white/90'>
            Liên hệ ngay để được chuyên viên pháp lý hỗ trợ chi tiết – nhanh chóng – chính xác.
          </p>

          <div className='mt-6'>
            <Button variant='contained' className='bg-white! text-blue-900! hover:bg-blue-50!' href='#contact'>
              Nhận tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LicenseConsulting
