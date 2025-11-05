'use client'
import {
  AppBar,
  Box,
  ListItem,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
  List,
  IconButton,
  Drawer,
  ListItemButton,
  Collapse,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

// import ThemeSwitch from '~/app/components/theme/ThemeSwitch'
import {
  ArrowForwardIos,
  ArrowDropDown,
  KeyboardArrowRight,
  Menu,
  Close,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material'
import { getTranslations } from 'next-intl/server'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export default function NavBar() {
  // const [openMenu, setOpenMenu] = useState<string | null>(null)
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

  const [open, setOpen] = React.useState(false)
  const [openMenuLv1, setOpenMenuLv1] = useState<string | null>(null)
  const [openMenuLv2, setOpenMenuLv2] = useState<string | null>(null)

  const toggleDrawer = (open: boolean) => () => setOpen(open === true || false)
  const handleToggleMenuLv1 = (title: string) => {
    setOpenMenuLv1(openMenuLv1 === title ? null : title)
  }

  const handleToggleMenuLv2 = (title: string) => {
    setOpenMenuLv2(openMenuLv2 === title ? null : title)
  }

  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [hoveredSubItem, setHoveredSubItem] = useState<number | null>(null)

  // locale
  const locale = useLocale()

  const t: any = useTranslations('navbar')
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale // thay locale trong path
    const newPath = segments.join('/')
    router.push(newPath)
  }

  const navItems = [
    { title: 'Trang chủ', path: `/${locale}/` },
    { title: t('about'), path: `/${locale}/gioi-thieu` },
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
        sx={(theme) => ({
          zIndex: theme.zIndex.drawer + 1
        })}
        className='!bg-white dark:!bg-gray-900 !text-black dark:!text-white dark:!shadow-gray-200 top-0'
      >
        {isMobile ? (
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Link href='/' key='logo'>
              <div style={{ position: 'relative', width: '120px', height: '60px' }}>
                <Image src='/logo-light.png' alt='Logo' fill sizes='120px' style={{ objectFit: 'contain' }} />
              </div>
            </Link>

            {!open ? (
              <IconButton edge='end' color='inherit' onClick={toggleDrawer(true)}>
                <Menu />
              </IconButton>
            ) : (
              <IconButton edge='end' color='inherit' onClick={toggleDrawer(false)}>
                <Close />
              </IconButton>
            )}

            <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
              <div className='mt-16'>
                <List sx={{ width: '100%', textTransform: 'uppercase' }}>
                  {navItems.map((item) => (
                    <div key={item.title}>
                      <ListItemButton
                        onClick={() => (item.submenu ? handleToggleMenuLv1(item.title) : setOpen(false))}
                        component={!item.submenu ? Link : 'div'}
                        href={!item.submenu ? item.path : undefined}
                      >
                        <ListItemText primary={item.title} />
                        {item.submenu && (openMenuLv1 === item.title ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>

                      {/* submenu lv1*/}
                      {item.submenu && (
                        <Collapse in={openMenuLv1 === item.title} timeout='auto' unmountOnExit>
                          <List component='div' disablePadding>
                            {item.submenu.map((sub: any) => (
                              <>
                                <ListItemButton
                                  key={sub.title}
                                  sx={{ pl: 4 }}
                                  onClick={() => (sub.submenu ? handleToggleMenuLv2(sub.title) : setOpen(false))}
                                  component={!sub.submenu ? Link : 'div'}
                                  href={!sub.submenu ? sub.path : undefined}
                                >
                                  <ListItemText primary={sub.title} />
                                  {sub.submenu && (openMenuLv2 === sub.title ? <ExpandLess /> : <ExpandMore />)}
                                </ListItemButton>

                                {/* submenu lv2 */}
                                {sub.submenu && (
                                  <Collapse in={openMenuLv2 === sub.title} timeout='auto' unmountOnExit>
                                    <List component='div' disablePadding>
                                      {sub.submenu.map((child: any) => (
                                        <ListItemButton
                                          key={child.title}
                                          sx={{ pl: 6 }}
                                          component={Link}
                                          href={child.path}
                                          onClick={() => toggleDrawer(false)}
                                        >
                                          <ListItemText primary={child.title} />
                                        </ListItemButton>
                                      ))}
                                    </List>
                                  </Collapse>
                                )}
                              </>
                            ))}
                          </List>
                        </Collapse>
                      )}
                    </div>
                  ))}
                </List>
              </div>
            </Drawer>
          </Toolbar>
        ) : (
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {/*logo*/}
            <Link href='/'>
              <Image src='/logo-light.png' alt='Logo' width={150} height={80} />
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
              <span
                className='border border-gray-400 rounded-md '
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                {/*<div onChange={(e) => changeLanguage(e.target.value)}>
                  <ReactCountryFlag
                    countryCode='VN'
                    svg
                    style={{
                      width: '2em',
                      height: '2em'
                    }}
                    title='Vietnam'
                  />
                  <ArrowDropDown />
                </div>*/}
                <Select
                  value={locale}
                  onChange={(e) => changeLanguage(e.target.value)}
                  sx={{ color: 'black', height: '35px' }}
                >
                  <MenuItem value='vi'>🇻🇳 Tiếng Việt</MenuItem>
                  <MenuItem value='en'>🇬🇧 English</MenuItem>
                </Select>

                {/*<span className='text-sm'>Tiếng Việt</span>*/}
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
        )}
      </AppBar>
    </div>
  )
}
