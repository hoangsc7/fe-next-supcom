import React from 'react'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import EditNoteIcon from '@mui/icons-material/EditNote'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import CampaignIcon from '@mui/icons-material/Campaign'
import GradingIcon from '@mui/icons-material/Grading'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
const StepTLCT = () => {
  const steps = [
    {
      number: '01',
      title: 'Chuẩn bị hồ sơ thành lập công ty',
      icon: EditNoteIcon,
      bgColor: '#9333EA',
      position: 'bottom'
    },
    {
      number: '02',
      title: 'Nộp hồ sơ thành lập công ty',
      icon: UploadFileIcon,
      bgColor: '#06B6D4',
      position: 'top'
    },
    {
      number: '03',
      title: 'Bố cáo thông tin doanh nghiệp',
      icon: CampaignIcon,
      bgColor: '#10B981',
      position: 'bottom'
    },
    {
      number: '04',
      title: 'Cấp giấy chứng nhận đăng ký',
      icon: GradingIcon,
      bgColor: '#EAB308',
      position: 'top'
    },
    {
      number: '05',
      title: 'Khắc dấu doanh nghiệp',
      icon: DesignServicesIcon,
      bgColor: '#F97316',
      position: 'bottom'
    },
    {
      number: '06',
      title: 'Bàn giao kết quả cho khách hàng',
      icon: TaskAltIcon,
      bgColor: '#DB2777',
      position: 'top'
    },
    {
      number: '07',
      title: 'Hỗ trợ sau thành lập',
      icon: SupportAgentIcon,
      bgColor: '#9333EA',
      position: 'bottom'
    }
  ]

  return (
    <div className='  p-4 md:p-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Title */}
        <h1 className='text-2xl md:text-3xl text-blue-900 text-center font-semibold uppercase mt-5 my-10'>
          Quy trình làm việc
        </h1>

        {/* Mobile View - Vertical */}
        <div className='md:hidden space-y-8'>
          {steps.map((step, index) => (
            <div key={index} className='relative'>
              <div className='flex items-center gap-6'>
                {/* Icon Circle */}
                <div
                  className='w-15 h-15 rounded-full flex items-center justify-center shadow-2xl shrink-0'
                  style={{ backgroundColor: step.bgColor }}
                >
                  <step.icon sx={{ fontSize: 30, color: 'white' }} />
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <div className='font-bold text-sm mb-1' style={{ color: step.bgColor }}>
                    Bước {step.number}
                  </div>
                  <h3 className='text-lg font-bold text-gray-900'>{step.title}</h3>
                </div>
              </div>

              {/* Dashed Connector */}
              {index < steps.length - 1 && (
                <div
                  className='w-0.5 h-8 ml-7.5 my-3 border-l-2 border-dashed'
                  style={{ borderColor: step.bgColor, opacity: 0.5 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Desktop View - Horizontal with Progress Bar */}
        <div className='hidden md:block'>
          <div className='relative'>
            {/* Progress Bar */}
            <div className='absolute top-1/2 left-0 right-0 -translate-y-1/2 h-6 rounded-full overflow-hidden shadow-lg flex'>
              {steps.map((step, index) => (
                <div key={index} className='flex-1' style={{ backgroundColor: step.bgColor }} />
              ))}
            </div>

            {/* Steps */}
            <div className='relative grid grid-cols-7 gap-2'>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${step.position === 'top' ? 'pt-10' : 'pb-10'}`}
                >
                  {/* Top Content */}
                  {step.position === 'top' && (
                    <>
                      <div className='mb-4 text-center'>
                        <div className='font-bold text-base mb-2' style={{ color: step.bgColor }}>
                          Bước {step.number}
                        </div>
                        <h3 className='text-lg font-bold text-gray-900 h-[45px] leading-tight px-2'>{step.title}</h3>
                      </div>
                      {/* Dashed line going down */}
                      <div
                        className='w-0.5 h-12 border-l-2 border-dashed mb-2'
                        style={{ borderColor: step.bgColor, opacity: 0.6 }}
                      />
                    </>
                  )}

                  {/* Icon Circle */}
                  <div
                    className='w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 z-10'
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <step.icon sx={{ fontSize: 48, color: 'white' }} />
                  </div>

                  {/* Bottom Content */}
                  {step.position === 'bottom' && (
                    <>
                      {/* Dashed line going up */}
                      <div
                        className='w-0.5 h-12 border-l-2 border-dashed mt-2'
                        style={{ borderColor: step.bgColor, opacity: 0.6 }}
                      />
                      <div className='mt-4 text-center'>
                        <div className='font-bold text-base mb-2' style={{ color: step.bgColor }}>
                          Bước {step.number}
                        </div>
                        <h3 className='text-lg font-bold text-gray-900 leading-tight px-2'>{step.title}</h3>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTLCT
