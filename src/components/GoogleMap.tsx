'use client'

import { useEffect, useState } from 'react'

export default function GoogleMap() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <iframe
        title='Bản đồ vị trí công ty Supcom'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6267255305766!2d105.80444307488996!3d21.047616580606416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba3de4b655d%3A0x4060f18e79cb3726!2zQ8O0bmcgdHkgVE5ISCBTdXBjb20gLSBL4bq_IHRvw6FuIHRodeG6vyAmIHRow6BuaCBs4bqtcCBkb2FuaCBuZ2hp4buHcA!5e0!3m2!1svi!2s!4v1767598404591!5m2!1svi!2s'
        className='w-full h-full border-0'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}
