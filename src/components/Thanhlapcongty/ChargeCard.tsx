import { Grid } from '@mui/material'
import React from 'react'
import ButtonContact from '../Button/ButtonContact'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ChargeCard = () => {
  return (
    <div id='charge' className='wrap-break-word'>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'center', padding: '24px' }}
        spacing={{ xs: 6, md: 0.1 }}
        gap={8}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <div className='w-full h-full shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl py-3'>
            <h2 className='text-gray-600 text-2xl md:text-3xl text-center py-2'>
              Gói cơ bản
              <br />
              1.490.000 VNĐ
            </h2>
            <hr className='text-gray-400' />
            <div className='p-4 text-lg'>
              <ul className=''>
                <li>
                  <span className='mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Giấy phép đăng ký kinh doanh</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Dấu tròn công ty</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Công bố mẫu dấu</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Bố cáo thành lập doanh nghiệp</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Điều lệ công ty</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Tài khoản ngân hàng số đẹp tự chọn</span>
                </li>
              </ul>
            </div>
            <div className='flex justify-center bottom-0'>
              <ButtonContact />
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <div className='w-full h-full shadow-[0_0_20px_rgba(0,200,255,1)] rounded-2xl py-3'>
            <h2 className='text-2xl md:text-3xl text-center py-2 text-[rgb(0,120,200)]'>
              Gói nâng cao
              <br />
              3.790.000 VNĐ
            </h2>
            <hr className='text-[rgb(0,120,200)]' />
            <div className='p-4 text-lg'>
              <ul className=''>
                <li>
                  <span className='mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Giấy phép đăng ký kinh doanh</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Dấu tròn công ty</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Công bố mẫu dấu</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Bố cáo thành lập doanh nghiệp</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Điều lệ công ty</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span className=''>Tài khoản ngân hàng số đẹp tự chọn</span>
                </li>{' '}
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Chữ ký số 1 năm</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Biển hiệu công ty</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Dấu chức danh</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Hoàn tất thủ tục thuế ban đầu</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Nộp tờ khai miễn 2-3 triệu thuế môn bài</span>
                </li>
              </ul>
            </div>

            <div className='flex justify-center bottom-0'>
              <ButtonContact />
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <div className='w-full h-full shadow-[0_0_20px_rgba(255,140,6,1)] rounded-2xl py-3'>
            <h2
              className='text-2xl md:text-3xl text-center py-2 text-[rgb(200,100,0)]
'
            >
              Gói toàn diện
              <br />
              4.890.000 VNĐ
            </h2>
            <hr className='text-[rgb(200,100,0)]' />
            <div className='p-4 text-lg'>
              <ul className=''>
                <div className='mb-2 text-center text-[rgb(200,100,0)]'>Bao gồm gói nâng cao</div>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Chữ ký số 3 năm</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>300 số hóa đơn điện tử</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Thiết kế, khởi tạo, phát hành hóa đơn</span>
                </li>
                <div className='text-[rgb(200,100,0)]'>Đặc quyền VIP:</div>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Tư vấn luật, thuế doanh nghiệp</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Tư vấn, hướng dẫn xuất hóa đơn</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Tư vấn, hỗ trợ kê khai Bảo hiểm xã hội</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Hỗ trợ đăng ký tài khoản hải quan</span>
                </li>
                <li>
                  <span className=' mr-2'>
                    <CheckCircleIcon fontSize='small' sx={{ color: '#00b300', marginBottom: '3px' }} />
                  </span>
                  <span>Tăng ngay gói kê khai thuế quý đầu tiên</span>
                </li>
              </ul>
            </div>
            <div className='flex justify-center bottom-0'>
              <ButtonContact />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChargeCard
