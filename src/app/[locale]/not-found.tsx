import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex justify-center'>
      <div className='bg-white w-full text-center p-25'>
        <h1 className='text-4xl  text-red-800'>404 | This page root could not be found</h1>
        <Link className='text-blue-800 pt-5' href='/'>
          Return Home
        </Link>
      </div>
    </div>
  )
}
