'use client'

import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { initFadeIn } from '~/hook/Animation'

// const containerVariants: Variants = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 }
//   }
// }

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// }

const benefits = [
  {
    title: 'Tiết kiệm chi phí',
    desc: 'Không cần tuyển kế toán nội bộ, tối ưu ngân sách vận hành.'
  },
  {
    title: 'Đúng hạn – đúng luật',
    desc: 'Báo cáo đầy đủ, đúng quy định, tránh rủi ro phạt thuế.'
  },
  {
    title: 'Hỗ trợ chuyên sâu',
    desc: 'Đội ngũ nhiều năm kinh nghiệm, tư vấn tận tâm.'
  },
  {
    title: 'Bảo mật tuyệt đối',
    desc: 'Thông tin doanh nghiệp được bảo mật nghiêm ngặt.'
  }
]

const SectionCard = () => {
  useEffect(() => {
    initFadeIn()
  }, [])
  return (
    <Grid container spacing={3} viewport={{ once: true, amount: 0.3 }} className='mt-10 px-5 md:px-20'>
      {benefits.map(({ title, desc }, index) => (
        <Grid key={index} size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <div
            className='
            fade fade-down-to-up
              w-full
              rounded-xl
              bg-white/10
              backdrop-blur
              p-8
              text-white
              flex
              flex-col
              gap-3
              transition-all
              duration-300
            '
          >
            <h3 className='text-lg md:text-xl font-semibold uppercase'>{title}</h3>
            <p className='text-sm text-white/80 leading-relaxed'>{desc}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default SectionCard
