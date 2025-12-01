import { Home, NavigateNext } from '@mui/icons-material'
import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import { NewsData } from '~/components/News/NewsData'
import FormNews from '~/components/News/FormNews'
// import { Category } from '~/types/new'
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

  // const listByCategory = NewsData.filter((item) => item.category.slug === resolvedParams.category)
  // if (listByCategory.length === 0) {
  //   return notFound()
  // }
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-[1170px] bg-white p-1 md:p-4'>
        <hr />
        <div className='flex justify-center pt-2 pb-2 h-auto '>
          <Breadcrumbs sx={{ width: '100%' }} aria-label='breadcrumb' separator={<NavigateNext fontSize='small' />}>
            <Link color='inherit' href={`/${resolvedParams.locale}/`}>
              <Home sx={{ margin: '0px 3px 3px 3px' }} fontSize='inherit' />
              Trang chủ
            </Link>
            <Typography>Tin tức</Typography>
          </Breadcrumbs>
        </div>
        <hr />
        <div className='mt-1'>
          <FormNews newsList={NewsData} />
        </div>
      </div>
    </div>
  )
}

export default PageCategory
