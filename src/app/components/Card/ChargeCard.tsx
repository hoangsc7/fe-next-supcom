import { Button, Grid } from '@mui/material'
import React from 'react'
import ButtonContact from '../Button/ButtonContact'

const ChargeCard = () => {
  return (
    <div className='wrap-break-word'>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'center', padding: '24px' }}
        spacing={{ xs: 6, md: 0.1 }}
        gap={8}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <div className='w-full shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl '>
            <h2 className='text-2xl md:text-3xl text-center py-2'>
              Base
              <br />
              1$
            </h2>
            <hr className='text-gray-400' />
            <div className='p-4 text-lg'>
              <ul className='list-disc pl-4'>
                <li>muc 1 dgsss sssss ssss sss ssss ssss sss ss sss sss</li>
                <li>muc 2</li>
              </ul>
            </div>
            <ButtonContact />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <div className='w-full shadow-[0_0_20px_rgba(0,200,255,1)] rounded-2xl'>
            <h2 className='text-2xl md:text-3xl text-center py-2'>
              Pro
              <br />
              1$
            </h2>
            <hr className='text-[rgba(0,200,255,1)]' />
            <div className='p-4 text-lg'>
              <ul className='list-disc pl-4'>
                <li>muc 1 dgsss sssss ssss sss ssss ssss sss ss sss sss</li>
                <li>muc 2</li>
              </ul>
            </div>
            <ButtonContact />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <div className='w-full shadow-[0_0_20px_rgba(255,140,6,1)] rounded-2xl'>
            <h2 className='text-2xl md:text-3xl text-center py-2'>
              Pro Max
              <br />
              1$
            </h2>
            <hr className='text-[rgba(255,140,6,1)]' />
            <div className='p-4 text-lg'>
              <ul className='list-disc pl-4'>
                <li>muc 1 dgsss sssss ssss sss ssss ssss sss ss sss sss</li>
                <li>muc 2</li>
              </ul>
            </div>
            <ButtonContact />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChargeCard
