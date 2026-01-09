import BannerDVKT from '~/components/DVKeToan/Banner_DVKT'
import SectionCard from '~/components/DVKeToan/SectionCard'
import SectionService from '~/components/DVKeToan/SectionService'

const kt = () => {
  return (
    <div>
      <div>
        <BannerDVKT />
      </div>
      <section className=' my-5 py-10'>
        <div className='text-blue-900 font-extrabold leading-none select-none'>
          <h2 className='text-center text-2xl md:text-3xl uppercase font-semibold'>các dịch vụ chúng tôi cung cấp</h2>
        </div>
        <div className='pt-10 md:px-20'>
          <SectionService />
        </div>
      </section>

      <section className='bg-blue-900 mt-5 py-10'>
        <div className='text-white font-extrabold leading-none select-none'>
          <h2 className='text-center text-2xl md:text-3xl uppercase font-semibold mx-3'>
            Những lợi ích khi sử dụng dịch vụ kế toán của chúng tôi
          </h2>
        </div>
        <SectionCard />
      </section>
    </div>
  )
}

export default kt
