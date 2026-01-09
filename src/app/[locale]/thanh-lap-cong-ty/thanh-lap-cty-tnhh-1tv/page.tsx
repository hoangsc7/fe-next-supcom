import BannerTLDN from '~/components/Thanhlapcongty/Banner_tlct'
import ChargeCard from '~/components/Thanhlapcongty/ChargeCard'
import FormContact from '~/components/Form/FormContact'
import StepTLCT from '~/components/Thanhlapcongty/SectionStepTLCT'
import SectionServiceCard from '~/components/Thanhlapcongty/SectionServiceCard'
import FormNews from '~/components/News/FormNews'
import { NewsData } from '~/components/News/NewsData'
import { New } from '~/types/new'
import SectionPrepare from '~/components/Thanhlapcongty/SectionPrepare'
import SectionSauTL from '~/components/Thanhlapcongty/SectionSauTL'
import PopupContact from '~/components/Form/PopupContact'
import Banner1TV from '~/components/Thanhlapcongty/1tv/Banner_1tv'

const TNHH1 = () => {
  return (
    <div className='w-full bg-white'>
      <Banner1TV />
      <main className='md:mx-[90px]'>
        {/* chi phi */}
        <section>
          <h1 className='text-2xl md:text-3xl text-center font-semibold uppercase mt-10'>
            Chi phí <span className='text-blue-900'>thành lập công ty tnhh 1 thành viên</span>
          </h1>
          <div className='my-3'>
            <ChargeCard />
          </div>
        </section>

        {/* chuan bi */}
        <section className='py-16 bg-[#f2f6ff]'>
          <div
            className=' text-blue-900 font-extrabold leading-none select-none'
            style={{ textShadow: '2px 2px 0px #80ffff' }}
          >
            <h2 className='text-center text-2xl md:text-3xl uppercase font-semibold mb-10 '>
              thành lập công ty tnhh 1 thành viên CẦN CHUẨN BỊ NHỮNG GÌ ?
            </h2>
          </div>

          <SectionPrepare />
        </section>

        {/* quy trinh */}
        <section className='my-3'>
          <StepTLCT />
        </section>

        {/*sau khi thanh lap*/}
        <section>
          <SectionSauTL />
        </section>

        {/* lien he */}
      </main>
      {/*<PopupContact autoOpen delay={1000} />*/}
    </div>
  )
}

export default TNHH1
