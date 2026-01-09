import { Grid, Card, CardContent } from '@mui/material'

const items = [
  {
    title: 'I. Treo biển hiệu tại trụ sở công ty',
    desc: 'Sau khi thành lập công ty, doanh nghiệp cần treo biển hiệu tại trụ sở đăng ký trên Giấy phép kinh doanh để đảm bảo đúng quy định pháp luật.'
  },
  {
    title: 'II. Đăng ký sử dụng chữ ký số doanh nghiệp',
    desc: 'Chữ ký số là dạng chữ ký điện tử dùng để ký hóa đơn điện tử, kê khai thuế, bảo hiểm xã hội, nộp báo cáo tài chính và các giao dịch điện tử khác.'
  },
  {
    title: 'III. Đăng ký sử dụng và phát hành hóa đơn điện tử',
    desc: 'Doanh nghiệp cần đăng ký hóa đơn điện tử với cơ quan thuế và phát hành hóa đơn để sử dụng trong hoạt động kinh doanh theo quy định.'
  },
  {
    title: 'IV. Nộp tờ khai lệ phí môn bài cho công ty mới',
    desc: 'Doanh nghiệp phải kê khai và nộp lệ phí môn bài trong thời hạn 30 ngày kể từ ngày được cấp Giấy phép đăng ký kinh doanh.'
  }
]

const SectionSauTL = () => {
  return (
    <section className='bg-[#000099] rounded-tl-[100px] rounded-br-[100px] py-16 my-5'>
      <h2 className='text-center text-xl md:text-3xl uppercase font-semibold mb-12 text-white'>
        BẠN CẦN LÀM GÌ SAU KHI THÀNH LẬP ?
      </h2>

      <Grid container spacing={4} className='px-5'>
        {items.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              className='h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl'
              sx={{ border: '1px solid #e5e7eb', borderRadius: '50px 0 50px 0' }}
            >
              <CardContent className='flex flex-col gap-4 '>
                <h3 className='text-lg font-semibold text-blue-800'>{item.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default SectionSauTL
