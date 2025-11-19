import { Home, NavigateNext } from '@mui/icons-material'
import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import { NewsData } from '~/app/components/News/NewsData'
import FormNews from '~/app/components/News/FormNews'
import { Category } from '~/types/new'
import { notFound } from 'next/navigation'
// import OutStandNews from '~/app/components/News/OutStandNews'

const PageCategory = async ({
  params,
  searchParams
}: {
  params: Promise<{ locale: string; category: string }>
  searchParams: Promise<{ page?: string }>
}) => {
  const resolvedParams = await params
  // const param = await searchParams
  // const pages = Number(param.page) || 1
  // const pageSize = 11
  // const params = await searchParams
  // console.log('category:', resolvedParams)
  const listByCategory = NewsData.filter((item) => item.category.slug === resolvedParams.category)
  if (listByCategory.length === 0) {
    return notFound()
  }
  // console.log('list:', listByCategory)

  // console.log('param:', JSON.stringify(params))
  // const page = Number(params.page) || 1
  // const pageSize = 11
  return (
    <div className='w-full max-w-[1170px] bg-white p-1 md:p-5'>
      {/*<div className='text-2xl uppercase'>Thành lập công ty</div>*/}
      <hr />

      {/*Breadcrumbs*/}
      <div className='flex justify-center pt-[8px] pb-[8px] h-auto '>
        <Breadcrumbs sx={{ width: '100%' }} aria-label='breadcrumb' separator={<NavigateNext fontSize='small' />}>
          <Link color='inherit' href={`/${resolvedParams.locale}/`}>
            <Home sx={{ margin: '0px 3px 3px 3px' }} fontSize='inherit' />
            Trang chủ
          </Link>

          <Typography sx={{}}>{listByCategory[0].category.name}</Typography>
        </Breadcrumbs>
      </div>
      <hr />
      {/**/}
      {/*<div>Dich vu thanh lap cong ty gia chi tu ...</div>*/}
      {/**/}
      {/*<OutStandNews />*/}
      <div className='mt-1'>
        <FormNews category={listByCategory[0].category} newsList={listByCategory} />
      </div>
    </div>
  )
}

export default PageCategory
