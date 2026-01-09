'use client'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'
import PopupSearchName from '../Form/PopupSearchName'
import { useState } from 'react'

const SectionPrepare = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <PopupSearchName open={open} onClose={() => setOpen(false)} />
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4'>
        <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
          <div className='shape-wrap w-12 h-[100px] mr-1'>
            <div
              className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
              style={{ textShadow: '2px 2px 0px #1e3a8a' }}
            >
              1
            </div>
          </div>

          <h5 className='font-semibold text-lg mt-3'>Chuẩn bị tên công ty</h5>

          <p className='text-gray-700 text-sm text-justify'>
            Tên công ty là yếu tố liên quan đến việc nhận diện thương hiệu của doanh nghiệp sau này. Khi đặt tên công ty
            bạn nên đặt tên ngắn gọn, dễ nhớ, dễ phát âm, tránh trùng lặp với các công ty đã thành lập trước đó. Để xác
            định xem có bị trùng với công ty khác không, bạn có thể truy câp vào đây để tra cứu.
          </p>
          <div className='flex justify-center mt-2'>
            <Button
              sx={{ background: '#e65c00', fontSize: '11px', color: 'white', fontWeight: 'bold' }}
              onClick={() => {
                setOpen(true)
              }}
            >
              <SearchIcon />
              Tra cứu tên công ty
            </Button>
          </div>
        </div>
        <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
          <div className='shape-wrap w-16 h-[100px] mr-1'>
            <div
              className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
              style={{ textShadow: '2px 2px 0px #1e3a8a' }}
            >
              2
            </div>
          </div>

          <h5 className='font-semibold text-lg mt-3'>Chuẩn bị CCCD/Hộ chiếu</h5>

          <p className='text-gray-700 text-sm text-justify'>
            Bạn vui lòng chuẩn bị Căn cước công dân hoặc Hộ chiếu của Đại diện pháp luật và Thành viên góp vốn (nếu có).
          </p>
        </div>
        <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
          <div className='shape-wrap w-16 h-[100px] mr-1'>
            <div
              className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
              style={{ textShadow: '2px 2px 0px #1e3a8a' }}
            >
              3
            </div>
          </div>

          <h5 className='font-semibold text-lg mt-3'>Xác định loại hình công ty, ngành nghề đăng ký</h5>

          <p className='text-gray-700 text-sm text-justify'>
            Loại hình doanh nghiệp và nghành nghề đăng ký là yếu tố quan trọng mà bạn cần nắm vững. Chủ doanh nghiệp cần
            hiểu rõ đặc điểm của từng loại hình doanh nghiệp để có thể xác định và lựa chọn loại hình doanh nghiệp phù
            hợp nhất với định hướng phát triển của công ty. Đồng thời bạn cũng cần xác định các ngành nghề kinh doanh mà
            công ty sẽ hoạt động trong thời gian tới.
          </p>
        </div>
        <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
          <div className='shape-wrap w-16 h-[100px] mr-1'>
            <div
              className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
              style={{ textShadow: '2px 2px 0px #1e3a8a' }}
            >
              4
            </div>
          </div>

          <h5 className='font-semibold text-lg mt-3'>Địa điểm đặt trụ sở công ty</h5>

          <p className='text-gray-700 text-sm text-justify'>
            Xác định địa chỉ trụ sở thuộc quyền sử dụng hợp pháp của công ty. Trụ sở của doanh nghiệp và địa điểm liên
            lạc của doanh nghiệp trên lãnh thổ Việt Nam, có địa chỉ được xác định gồm số nhà, ngách, hẻm, ngõ phố, phố,
            đường hoặc thôn, xóm, ấp, xã, phường, thành phố trực thuộc trung ương, số điện thoại, thư điện tử (nếu có).
          </p>
        </div>
        <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
          <div className='shape-wrap w-16 h-[100px] mr-1'>
            <div
              className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
              style={{ textShadow: '2px 2px 0px #1e3a8a' }}
            >
              5
            </div>
          </div>

          <h5 className='font-semibold text-lg mt-3'>Xác định vốn điều lệ</h5>

          <p className='text-gray-700 text-sm text-justify'>
            Vốn điều lệ là số vốn do các thành viên, cố đông góp hoặc cam kết góp đủ trong một thời gian nhất định(không
            quá 90 ngày kể từ ngày được cấp phép hoạt động) và được ghi vào điều lệ công ty. Lưu ý mức thuế môn bài hàng
            năm mà công ty phải đóng được xác định dựa trên mức vốn điều lệ của công ty.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionPrepare
