'use client'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { initFadeIn } from '~/hook/Animation'
const SectionService = () => {
  // const containerVariants: Variants = {
  //   hidden: {
  //     opacity: 1
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.15
  //     }
  //   }
  // }

  // const boxVariantUpToDown: Variants = {
  //   hidden: { opacity: 0, y: -50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: 'easeOut'
  //     }
  //   }
  // }

  const [open, setOpen] = useState(false)

  const PopupContact = dynamic(() => import('../Form/PopupContact'), {
    ssr: false
  })
  useEffect(() => {
    initFadeIn()
  }, [])
  const services = [
    { title: 'Dịch vụ báo cáo quý' },
    { title: 'Dịch vụ báo cáo tài chính' },
    { title: 'Dịch vụ giải thể công ty' }
  ]

  return (
    <div>
      <PopupContact open={open} onClose={() => setOpen(false)} />
      <Grid container spacing={3}>
        {services.map(({ title }, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }} sx={{ display: 'flex', paddingInline: '14px' }}>
            <div
              className='
                fade fade-up-to-down
                w-full
                h-full
                rounded-xl
                py-10
                px-20
                text-center
                flex
                flex-col
                justify-between
                shadow-[0_0_10px_rgba(0,200,255,0.6)]
                transition-all
                duration-300
              '
            >
              <div>
                <h2 className='font-semibold md:text-xl uppercase'>{title}</h2>
                <p className='mt-3 text-sm'>Hỗ trợ từ A–Z, không phát sinh chi phí</p>
              </div>

              <div className='mt-6 text-blue-500'>
                <Button onClick={() => setOpen(true)} className='inline-flex items-center gap-1'>
                  Nhận tư vấn <ArrowForwardIcon fontSize='small' />
                </Button>
              </div>
            </div>
          </Grid>
        ))}
        {/* <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', paddingInline: '14px' }}>
          <motion.div
            variants={boxVariantUpToDown}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 25px rgba(0,200,255,0.9)'
            }}
            className='
                w-full
                h-full
                rounded-xl
                py-10
                px-20
                text-center
                flex
                flex-col
                justify-between
                shadow-[0_0_10px_rgba(0,200,255,0.6)]
                transition-all
                duration-300
              '
          >
            <div>
              <h2 className='font-semibold md:text-xl uppercase'>Dịch vụ báo cáo tài chính</h2>
              <p className='mt-3 text-sm'>Hỗ trợ từ A–Z, không phát sinh chi phí</p>
            </div>

            <div className='mt-6 text-blue-500'>
              <Link href='#contact' className='inline-flex items-center gap-1'>
                Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
              </Link>
            </div>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', paddingInline: '14px' }}>
          <motion.div
            variants={boxVariantUpToDown}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 25px rgba(0,200,255,0.9)'
            }}
            className='
                w-full
                h-full
                rounded-xl
                py-10
                px-20
                text-center
                flex
                flex-col
                justify-between
                shadow-[0_0_10px_rgba(0,200,255,0.6)]
                transition-all
                duration-300
              '
          >
            <div>
              <h2 className='font-semibold md:text-xl uppercase'>Dịch vụ giải thể công ty</h2>
              <p className='mt-3 text-sm'>Hỗ trợ từ A–Z, không phát sinh chi phí</p>
            </div>

            <div className='mt-6 text-blue-500'>
              <Link href='#contact' className='inline-flex items-center gap-1'>
                Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
              </Link>
            </div>
          </motion.div>
        </Grid>
*/}
      </Grid>
    </div>
  )
}

export default SectionService
