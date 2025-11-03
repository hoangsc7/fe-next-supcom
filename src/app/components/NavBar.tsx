'use client'
import { AppBar, Box, Toolbar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

// import ThemeSwitch from '~/app/components/theme/ThemeSwitch'
import { ArrowForwardIos, ArrowDropDown, KeyboardArrowRight } from '@mui/icons-material'

export default function NavBar() {
  // const [openMenu, setOpenMenu] = useState<string | null>(null)

  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [hoveredSubItem, setHoveredSubItem] = useState<number | null>(null)

  const navItems = [
    { title: 'Trang chủ', path: '/' },
    { title: 'Giới thiệu', path: '/gioi-thieu' },
    {
      title: 'Dịch vụ',
      path: '/',
      submenu: [
        {
          title: 'Thành lập doanh nghiệp',
          path: '/dich-vu/thanh-lap-cong-ty',
          submenu: [
            { title: 'Việt Nam', path: '/vietnam' },
            { title: 'Nước ngoài', path: '/nuocngoai' }
          ]
        },
        { title: 'Hộ kinh doanh', path: '/dich-vu/ho-kinh-doanh' },
        { title: 'Thay đổi giấy phép kinh doanh', path: '/dich-vu/thay-doi-giay-phep-kinh-doanh' },
        { title: 'GIải thế', path: '/dich-vu/giai-the' },
        { title: 'Bảo hộ thương hiệu', path: '/dich-vu/bao-ho-thuong-hieu' },
        { title: 'GIải pháp lao động', path: '/dich-vu/giai-phap-lao-dong' }
      ]
    },
    {
      title: 'Sản phẩm',
      path: '/san-pham',
      submenu: [
        { title: 'Chữ ký số', path: '/san-pham/chu-ky-so' },
        { title: 'Hóa đơn điện tử', path: '/san-pham/hoa-don-dien-tu' },
        { title: 'Bảo hiểm xã hội', path: '/san-pham/bao-hiem-xa-hoi' }
      ]
    },
    {
      title: 'Tư vấn',
      path: '/tu-van',
      submenu: [
        { title: 'Tư vấn luật', path: '/tu-van/tu-van-luat' },
        { title: 'Tư vấn kế toán', path: '/tu-van/tu-van-ke-toan' },
        { title: 'Tư vấn chữ ký số', path: '/tu-van/tu-van-chu-ky-so' },
        { title: 'Tư vấn hóa đơn điện tử', path: '/san-pham/tu-van-hoa-don-dien-tu' }
      ]
    }
  ]

  return (
    <div>
      <AppBar
        position='fixed'
        className='!bg-white dark:!bg-gray-900 !text-black dark:!text-white dark:!shadow-gray-200'
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {/*logo*/}
          <Link href='/'>
            <Image src='/logo-supcom.png' alt='Logo' width={150} height={80} />
          </Link>

          {/*item*/}
          <Box
            sx={{
              display: 'flex',
              gap: 5,
              justifyContent: 'center',
              textTransform: 'uppercase',
              margin: '0 20px',
              position: 'relative'
            }}
          >
            {navItems.map((item, index) => (
              <Box
                key={item.title}
                sx={{ position: 'relative', transition: 'color 0.2s', '&:hover': { color: '#0197dc' } }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => {
                  setHoveredItem(null)
                  setHoveredSubItem(null)
                }}
              >
                <Link href={item?.path}>
                  {item.title}
                  {item.submenu && (
                    <span style={{ marginBottom: '2px' }}>
                      <ArrowDropDown />
                    </span>
                  )}
                </Link>

                {/* SUBMENU lv1 */}
                {item.submenu && hoveredItem === index && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: 'white',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      color: 'black',
                      minWidth: '250px',
                      zIndex: 10
                    }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Box
                        key={subItem.title}
                        sx={{
                          width: '270px',
                          position: 'relative',
                          padding: '10px 15px',
                          cursor: 'pointer',
                          transition: 'color 0.2s',
                          '&:hover': { color: '#0197dc' }
                        }}
                        onMouseEnter={() => setHoveredSubItem(subIndex)}
                        onMouseLeave={() => setHoveredSubItem(null)}
                      >
                        <Link
                          href={subItem.path}
                          style={{
                            display: 'flex'
                          }}
                        >
                          {subItem.title}
                          {subItem.submenu && <KeyboardArrowRight sx={{ paddingLeft: '8px' }} />}
                        </Link>

                        {/* SUBMENU lv2 */}
                        {subItem.submenu && hoveredSubItem === subIndex && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: '100%',
                              backgroundColor: 'white',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                              color: 'black',
                              minWidth: '200px',
                              zIndex: 20
                            }}
                          >
                            {subItem.submenu.map((subSub) => (
                              <Box
                                key={subSub.title}
                                sx={{
                                  padding: '10px 15px',
                                  transition: 'color 0.2s',
                                  '&:hover': { color: '#0197dc' }
                                }}
                              >
                                <Link href={subSub.path}>{subSub.title}</Link>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          {/*language*/}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ marginRight: '5px' }}>
                <ReactCountryFlag
                  countryCode='VN'
                  svg
                  style={{
                    width: '2em',
                    height: '2em'
                  }}
                  title='Vietnam'
                />
              </div>
              <span className='text-sm'>Tiếng Việt</span>
              {/*<ul>
                <li>
                  <a href='#'>Tiếng Việt</a>
                </li>
                <li>
                  <a href='#'>English</a>
                </li>
              </ul>*/}
            </span>
          </Box>
          {/* <div className=''>
            <ThemeSwitch />
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}
