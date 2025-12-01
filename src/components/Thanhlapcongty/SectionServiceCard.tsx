'use client'
import { ArrowForward } from '@mui/icons-material'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Grid } from '@mui/material'
import PopupContact from '../Form/PopupContact'

// const boxVariantTopToBot = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 }
// }
const boxVariantLeftToRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
}
const boxVariantRightToLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
}

const SectionServiceCard = () => {
  const [openPopup, setOpenPopup] = useState(false)
  return (
    <div>
      <PopupContact open={openPopup} onClose={() => setOpenPopup(false)} />

      <h1 className='text-purple-950 text-2xl md:text-3xl text-center font-semibold uppercase mt-10 mb-5 mx-5'>
        các loại hình doanh nghiệp
      </h1>
      <Grid container spacing={3}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <motion.div
            variants={boxVariantLeftToRight}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className='text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'
          >
            <h2 className='font-semibold md:text-xl text-center'>Thành lập công ty có vốn đầu tư nước ngoài</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5'>
              <Button onClick={() => setOpenPopup(true)} sx={{ textTransform: 'none' }}>
                Nhận tư vấn <ArrowForward fontSize='small' />
              </Button>
            </div>
          </motion.div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <motion.div
            variants={boxVariantRightToLeft}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className='text-center w-full h-full rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'
          >
            <h2 className='font-semibold md:text-xl text-center'>Thành lập chi nhánh công ty</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5'>
              <Button onClick={() => setOpenPopup(true)} sx={{ textTransform: 'none' }}>
                Nhận tư vấn <ArrowForward fontSize='small' />
              </Button>
            </div>
          </motion.div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <motion.div
            variants={boxVariantLeftToRight}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className='text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'
          >
            <h2 className='font-semibold md:text-xl text-center'>Thành lập địa điểm kinh doanh công ty</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5'>
              <Button onClick={() => setOpenPopup(true)} sx={{ textTransform: 'none' }}>
                Nhận tư vấn <ArrowForward fontSize='small' />
              </Button>
            </div>
          </motion.div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <motion.div
            variants={boxVariantRightToLeft}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className='text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'
          >
            <h2 className='font-semibold md:text-xl text-center'>Thành lập hợp tác xã</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5'>
              <Button onClick={() => setOpenPopup(true)} sx={{ textTransform: 'none' }}>
                Nhận tư vấn <ArrowForward fontSize='small' />
              </Button>
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SectionServiceCard
