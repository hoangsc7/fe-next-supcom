import ChargeCard from '~/components/Thanhlapcongty/ChargeCard'
import StepTLCT from '~/components/Thanhlapcongty/SectionStepTLCT'
import SectionPrepare from '~/components/Thanhlapcongty/SectionPrepare'
import SectionSauTL from '~/components/Thanhlapcongty/SectionSauTL'
import BannerHTX from '~/components/Thanhlapcongty/htx/Banner_htx'

const HTX = () => {
  return (
    <div className='w-full bg-white'>
      <BannerHTX />
      <main className='md:mx-[90px]'>
        {/* chi phi */}
        <section>
          <h1 className='text-2xl md:text-3xl text-center font-semibold uppercase mt-10'>
            Chi phí <span className='text-blue-900'>thành lập hợp tác xã</span>
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
              thành lập hợp tác xã CẦN CHUẨN BỊ NHỮNG GÌ ?
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
      </main>
      {/*<PopupContact autoOpen delay={1000} />*/}
    </div>
  )
}

export default HTX
