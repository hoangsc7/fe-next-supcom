'use client'

import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { initFadeIn } from '~/hook/Animation'
import CloudSyncIcon from '@mui/icons-material/CloudSync'
import BoltIcon from '@mui/icons-material/Bolt'
import SecurityIcon from '@mui/icons-material/Security'
import Image from 'next/image'
import PopupContact from '~/components/Form/PopupContact'

const Software = () => {
  const features = [
    {
      icon: <CloudSyncIcon className='text-blue-600' fontSize='large' />,
      text: 'Kết nối trực tiếp hệ thống thuế'
    },
    {
      icon: <BoltIcon className='text-yellow-500' fontSize='large' />,
      text: 'Xuất hóa đơn chỉ trong vài giây'
    },
    {
      icon: <SecurityIcon className='text-emerald-600' fontSize='large' />,
      text: 'Lưu trữ an toàn – lâu dài'
    }
  ]
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => initFadeIn())
    } else {
      setTimeout(initFadeIn, 200)
    }
  }, [])

  return (
    <div className='overflow-hidden'>
      {/* ================= HERO ================= */}
      <section className='py-20 bg-gradient-to-b from-blue-100 via-white to-cyan-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-10 text-center'>
          <h1 className='text-2xl md:text-4xl font-bold uppercase bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent'>
            Phần mềm hỗ trợ doanh nghiệp
          </h1>

          <p className='mt-5 text-gray-600 max-w-3xl mx-auto'>
            Giải pháp phần mềm chính hãng giúp doanh nghiệp tối ưu hóa kế toán, hóa đơn điện tử, chữ ký số và bảo hiểm
            xã hội – đảm bảo tuân thủ pháp luật, tiết kiệm chi phí vận hành.
          </p>
          <div className='mt-10 text-center'>
            <PopupContact open={open} onClose={() => setOpen(false)} />
            <Button
              onClick={() => setOpen(true)}
              size='large'
              className='!bg-blue-500 !text-white hover:!bg-blue-700 px-10 py-3 !rounded-3xl'
            >
              Liên hệ chúng tôi
            </Button>
          </div>
        </div>
      </section>

      {/* ================= FASTCA ================= */}
      {/*<section className='py-16 bg-gradient-to-r from-indigo-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase text-indigo-900'>Chữ ký số FastCA</h2>

          <p className='mt-3 text-gray-600 max-w-3xl'>
            FastCA là chữ ký số chính hãng, được Bộ TT&TT cấp phép, giúp doanh nghiệp ký số hồ sơ, hóa đơn, tờ khai thuế
            an toàn – hợp pháp.
          </p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <article className='fade fade-left-to-right bg-white p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg text-indigo-800'>Lợi ích nổi bật</h3>
              <ul className='mt-3 list-disc list-inside text-gray-600'>
                <li>Bảo mật cao – đạt chuẩn pháp lý</li>
                <li>Ký số mọi lúc, mọi nơi</li>
                <li>Tương thích hệ thống thuế điện tử</li>
              </ul>
            </article>

            <article className='fade fade-right-to-left bg-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg text-blue-800'>Phù hợp cho</h3>
              <p className='mt-3 text-gray-600'>
                Doanh nghiệp mới thành lập, doanh nghiệp kê khai thuế, phát hành hóa đơn điện tử.
              </p>
            </article>
          </div>
        </div>
      </section>*/}

      <section className='pb-16 bg-gradient-to-r from-[#fdf6e3] via-[#fffaf0] to-[#fdf6e3]'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <div className='flex justify-center py-10'>
            <Image src='/logo-fastca.png' alt='' width={200} height={10} quality={100} />
          </div>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase text-[#7a5c2e]'>Chữ ký số FastCA</h2>

          <p className='mt-3 text-gray-700 max-w-3xl'>
            FastCA là chữ ký số chính hãng, được Bộ TT&TT cấp phép, giúp doanh nghiệp ký số hồ sơ, hóa đơn, tờ khai thuế
            an toàn – hợp pháp.
          </p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Lợi ích */}
            <article
              className='
          fade fade-left-to-right
          bg-white
          p-6
          rounded-xl
          border
          border-[#f0e0a6]
          hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)]
          transition
        '
            >
              <h3 className='font-semibold text-lg text-[#7a5c2e]'>Lợi ích nổi bật</h3>
              <ul className='mt-3 list-disc list-inside text-gray-700'>
                <li>Bảo mật cao – đạt chuẩn pháp lý</li>
                <li>Ký số mọi lúc, mọi nơi</li>
                <li>Tương thích hệ thống thuế điện tử</li>
              </ul>
            </article>

            {/* Phù hợp cho */}
            <article
              className='
          fade fade-right-to-left
          bg-white
          p-6
          rounded-xl
          border
          border-[#e6d3a3]
          hover:shadow-[0_10px_30px_rgba(122,92,46,0.25)]
          transition
        '
            >
              <h3 className='font-semibold text-lg text-[#7a5c2e]'>Phù hợp cho</h3>
              <p className='mt-3 text-gray-700'>
                Doanh nghiệp mới thành lập, doanh nghiệp kê khai thuế, phát hành hóa đơn điện tử.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= CYBERBILL ================= */}
      {/*<section className='py-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase'>Hóa đơn điện tử CyberBill</h2>

          <p className='mt-3 max-w-3xl text-white/90'>
            CyberBill đạt chuẩn Tổng cục Thuế, giúp doanh nghiệp xuất – quản lý – lưu trữ hóa đơn điện tử nhanh chóng và
            chính xác.
          </p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {features.map((item, i) => (
              <div
                key={i}
                className='fade fade-up-to-down bg-white/90  text-gray-800 p-6 rounded-xl shadow-xl backdrop-blur flex flex-col items-center text-center gap-4  transition-all duration-300 '
              >
                <div className='p-3 rounded-full bg-gray-100'>{item.icon}</div>
                <p className='font-medium'>{item.text}</p>
              </div>
            ))}
          </div>

          <div className='mt-8'>
            <Button
              variant='contained'
              className='!bg-white !text-blue-600 hover:!bg-blue-50'
              href='/hoa-don-dien-tu-cyberbill'
            >
              Tìm hiểu CyberBill →
            </Button>
          </div>
        </div>
      </section>*/}

      <section className='pb-16 bg-gradient-to-br from-[#ff1a1a] to-[#ff6666] text-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <div className='flex justify-center py-10'>
            <Image src='/xCyber-bill.png' alt='' width={200} height={100} quality={100} />
          </div>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase'>Hóa đơn điện tử CyberBill</h2>

          <p className='mt-3 max-w-3xl text-white/90'>
            CyberBill đạt chuẩn Tổng cục Thuế, giúp doanh nghiệp xuất – quản lý – lưu trữ hóa đơn điện tử nhanh chóng và
            chính xác.
          </p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {features.map((item, i) => (
              <div
                key={i}
                className='
            fade fade-up-to-down
            bg-white
            text-gray-800
            p-6
            rounded-xl
            shadow-xl
            flex
            flex-col
            items-center
            text-center
            gap-4
            hover:-translate-y-1
            hover:shadow-[0_15px_35px_rgba(190,18,60,0.35)]
            transition-all
            duration-300
          '
              >
                <div className='p-3 rounded-full bg-[#fff1f2] text-[#e11d48]'>{item.icon}</div>
                <p className='font-medium'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EFY ================= */}
      <section className='pb-16 bg-gradient-to-r from-blue-400 to-cyan-500 text-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-10'>
          <div className='flex justify-center py-10'>
            <Image src='/logo-ebhxh.png' alt='' width={100} height={50} quality={100} />
          </div>
          <h2 className='text-2xl md:text-3xl font-semibold uppercase '>Phần mềm bảo hiểm xã hội EFY</h2>

          <p className='mt-3  max-w-3xl'>
            EFY hỗ trợ doanh nghiệp kê khai, nộp hồ sơ BHXH điện tử nhanh chóng, hạn chế sai sót.
          </p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <article className='fade fade-up-to-down bg-white p-6 rounded-xl border border-emerald-100 hover:shadow-md transition'>
              <h3 className='font-semibold text-emerald-700'>Tính năng chính</h3>
              <ul className='mt-3 list-disc list-inside text-gray-600'>
                <li>Kê khai BHXH điện tử</li>
                <li>Nộp hồ sơ online</li>
                <li>Theo dõi trạng thái xử lý</li>
              </ul>
            </article>

            <article className='fade fade-up-to-down bg-white p-6 rounded-xl border border-green-100 hover:shadow-md transition'>
              <h3 className='font-semibold text-green-700'>Lợi ích</h3>
              <p className='mt-3 text-gray-600'>
                Giảm sai sót hồ sơ, tiết kiệm thời gian, đảm bảo tuân thủ đúng quy định BHXH.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4 md:px-10'>
          <h2 className='text-center text-2xl md:text-3xl font-semibold uppercase text-blue-900'>
            Lợi ích khi sử dụng phần mềm của chúng tôi
          </h2>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              'Phần mềm chính hãng – cập nhật liên tục',
              'Tuân thủ đầy đủ quy định pháp luật',
              'Hỗ trợ kỹ thuật nhanh chóng 24/7',
              'Chi phí hợp lý – không phát sinh'
            ].map((text, i) => (
              <div
                key={i}
                className='fade fade-left-to-right flex items-start gap-4 bg-gray-50 p-6 rounded-xl hover:shadow-md transition'
              >
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold'>
                  ✓
                </span>
                <span className='text-gray-700'>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Software
