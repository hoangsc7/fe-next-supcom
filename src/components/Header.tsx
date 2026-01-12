// 'use client'
// import {
//   AppBar,
//   Box,
//   ListItemText,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
//   List,
//   IconButton,
//   Drawer,
//   ListItemButton,
//   Select,
//   MenuItem
// } from '@mui/material'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'

// // import ThemeSwitch from '~/app/components/theme/ThemeSwitch'
// import { Menu, Close } from '@mui/icons-material'
// import { useLocale, useTranslations } from 'next-intl'
// import { usePathname, useRouter } from 'next/navigation'

// export default function Header() {
//   // const [openMenu, setOpenMenu] = useState<string | null>(null)
//   const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

//   const [open, setOpen] = React.useState(false)

//   const toggleDrawer = (open: boolean) => () => setOpen(open === true || false)

//   const [hoveredItem, setHoveredItem] = useState<number | null>(null)
//   const [hoveredSubItem, setHoveredSubItem] = useState<number | null>(null)

//   // locale
//   const locale = useLocale()

//   const t = useTranslations('navbar')
//   const router = useRouter()
//   const pathname = usePathname()

//   const changeLanguage = (newLocale: string) => {
//     const segments = pathname.split('/')
//     if (segments.length > 1) segments[1] = newLocale
//     else segments[1] = newLocale
//     const newPath = segments.join('/')
//     router.push(newPath)
//   }
//   const isActive = (itemPath: string) => {
//     console.log('pathname:', pathname, 'itemPath:', itemPath)

//     if (!pathname) return false
//     if (itemPath === `/${locale}` || itemPath === `/${locale}/`) {
//       return pathname === `/${locale}` || pathname === `/${locale}/`
//     }
//     return pathname.startsWith(itemPath)
//   }

//   const navItems = [
//     { title: 'Thành lập công ty', slug: `thanh-lap-cong-ty` },
//     { title: 'Tư vấn giấy phép', path: `tu-van-giay-phep` },
//     { title: 'Kế toán thuế', path: `ke-toan-thue` },
//     { title: 'Thay đổi GPKD', path: `thay-doi-gpkd` },
//     { title: 'Phần mềm', path: `phan-men` }
//   ]

//   return (
//     <div>
//       <AppBar
//         position='fixed'
//         sx={(theme) => ({
//           zIndex: theme.zIndex.drawer + 1
//         })}
//         className='!bg-white dark:!bg-gray-900 !text-black dark:!text-white dark:!shadow-gray-200 top-0'
//       >
//         {isMobile ? (
//           <Toolbar>
//             <div className='w-full flex justify-between'>
//               <Link href={`/${locale}/`} key='logo'>
//                 <div style={{ position: 'relative', width: '140px', height: '70px' }}>
//                   <Image
//                     src='/logo-light.png'
//                     priority
//                     alt='Logo'
//                     fill
//                     sizes='120px'
//                     style={{ objectFit: 'contain' }}
//                   />
//                 </div>
//               </Link>
//               <div className='flex justify-items-center'>
//                 <Box sx={{ display: 'flex', alignContent: 'center', marginRight: '10px' }}>
//                   <span className=' ' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//                     <Select
//                       id='locale'
//                       name='Locale'
//                       value={locale}
//                       onChange={(e) => changeLanguage(e.target.value)}
//                       sx={{
//                         color: 'black',
//                         height: '35px',
//                         minWidth: 50,
//                         '& .MuiSelect-select': {
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '6px'
//                         }
//                       }}
//                       renderValue={(value) => (
//                         <Box display='flex' alignItems='center'>
//                           🇻🇳
//                           {/*{value === 'vi' ? '🇻🇳' : '🇬🇧'}*/}
//                         </Box>
//                       )}
//                     >
//                       <MenuItem value='vi'>
//                         <Box display='flex' alignItems='center' gap={1}>
//                           🇻🇳 Tiếng Việt
//                         </Box>
//                       </MenuItem>
//                       {/*<MenuItem value='en'>
//                         <Box display='flex' alignItems='center' gap={1}>
//                           🇬🇧 English
//                         </Box>
//                       </MenuItem>*/}
//                     </Select>
//                   </span>
//                 </Box>
//                 <div className='flex justify-center mr-1'>
//                   {!open ? (
//                     <IconButton edge='end' color='inherit' onClick={toggleDrawer(true)}>
//                       <Menu />
//                     </IconButton>
//                   ) : (
//                     <IconButton edge='end' color='inherit' onClick={toggleDrawer(false)}>
//                       <Close />
//                     </IconButton>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
//               <div className='mt-18'>
//                 <List sx={{ width: '100%' }}>
//                   {navItems.map((item) => (
//                     <ListItemButton
//                       key={item.title}
//                       component={Link}
//                       href={`/${locale}/${item.path}`}
//                       onClick={toggleDrawer(false)}
//                     >
//                       <ListItemText primary={item.title} />
//                     </ListItemButton>
//                   ))}
//                 </List>
//               </div>
//             </Drawer>
//           </Toolbar>
//         ) : (
//           <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
//             {/*logo*/}
//             <Link href='/'>
//               <Image
//                 src='/logo-light.png'
//                 alt='Logo'
//                 width={160}
//                 height={80}
//                 style={{ width: 'auto', margin: '4px 0' }}
//               />
//             </Link>

//             {/*item*/}
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 position: 'relative'
//               }}
//             >
//               {navItems.map((item, index) => {
//                 const fullPath = `/${locale}/${item.path}`
//                 return (
//                   <Box
//                     key={item.title}
//                     sx={{
//                       width: 'auto',
//                       padding: '0 10px',
//                       position: 'relative',
//                       transition: 'color 0.2s',
//                       '&:hover': { color: '#0197dc' },
//                       color: isActive(fullPath) ? '#0197dc' : 'inherit',
//                       textDecoration: isActive(fullPath) ? 'underline' : 'none',
//                       textUnderlineOffset: '25px'
//                     }}
//                     // onMouseEnter={() => setHoveredItem(index)}
//                     // onMouseLeave={() => setHoveredItem(null)}
//                   >
//                     <Link href={fullPath}>{item.title}</Link>
//                   </Box>
//                 )
//               })}
//             </Box>

//             {/*language*/}
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}
//             >
//               <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//                 <Select
//                   id='locale'
//                   name='Locale'
//                   value={locale}
//                   onChange={(e) => changeLanguage(e.target.value)}
//                   sx={{ color: 'black', height: '35px' }}
//                 >
//                   <MenuItem value='vi'>🇻🇳 Tiếng Việt</MenuItem>
//                   {/*<MenuItem value='en'>🇬🇧 English</MenuItem>*/}
//                 </Select>
//               </span>
//             </Box>
//             {/* <div className=''>
//             <ThemeSwitch />
//           </div> */}
//           </Toolbar>
//         )}
//       </AppBar>
//     </div>
//   )
// }

'use client'
import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
  List,
  IconButton,
  Drawer,
  ListItemButton,
  ListItemText
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import ButtonContact from './Button/ButtonContact'

export default function Header() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

  const [open, setOpen] = useState(false)
  const toggleDrawer = (value: boolean) => () => setOpen(value)

  const locale = useLocale()
  // const t = useTranslations('navbar')
  // const router = useRouter()
  const pathname = usePathname() || '/'

  // const changeLanguage = (newLocale: string) => {
  //   const segments = pathname.split('/')
  //   // segments[0] = '' (because pathname starts with '/')
  //   // segments[1] is current locale (if present)
  //   if (segments.length > 1) segments[1] = newLocale
  //   else segments[1] = newLocale
  //   const newPath = segments.join('/')
  //   router.push(newPath)
  // }

  const isActive = (itemPath: string) => {
    // itemPath expected like `/vi/ke-toan-thue` or `/vi` (home)
    if (!pathname) return false
    if (itemPath === `/${locale}` || itemPath === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(itemPath)
  }

  // Make keys consistent: always use `path`
  const navItems = [
    { title: 'Thành lập công ty', slug: 'thanh-lap-cong-ty' },
    { title: 'Tư vấn giấy phép', slug: 'tu-van-giay-phep' },
    { title: 'Thay đổi GPKD', slug: 'thay-doi-gpkd' },
    { title: 'Phần mềm', slug: 'phan-mem' },
    { title: 'Dịch vụ kế toán', slug: 'dich-vu-ke-toan' },
    { title: 'Tin tức', slug: 'tin-tuc' }
  ]

  return (
    <div>
      <AppBar
        position='fixed'
        sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
        className='bg-white! dark:bg-gray-900! text-black! dark:text-white! dark:shadow-gray-200! top-0'
      >
        {isMobile ? (
          // Mobile
          <Toolbar>
            <div className='w-full flex justify-between'>
              <Link href={`/${locale}/`} key='logo'>
                <div style={{ position: 'relative', width: '140px', height: '70px' }}>
                  <Image
                    src='/logo-light.png'
                    priority
                    alt='Logo'
                    fill
                    sizes='120px'
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </Link>

              <div className='flex justify-center items-center gap-2  w-15'>
                {/*<Select
                  id='locale'
                  name='Locale'
                  value={locale}
                  onChange={(e) => changeLanguage(String(e.target.value))}
                  sx={{ color: 'black', height: '35px', minWidth: 50 }}
                  renderValue={(value) => (
                    <Box display='flex' alignItems='center'>
                      🇻🇳
                      {value === 'vi' ? '🇻🇳' : '🇬🇧'}
                    </Box>
                  )}
                >
                  <MenuItem value='vi'>🇻🇳 Tiếng Việt</MenuItem>
                  <MenuItem value='en'>🇬🇧 English</MenuItem>
                </Select>*/}

                <div className='flex justify-center border border-gray-300 rounded-lg bg-auto'>
                  <IconButton onClick={toggleDrawer(!open)}>{open ? <CloseIcon /> : <MenuIcon />}</IconButton>
                </div>
              </div>
            </div>

            <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
              <div className='mt-18'>
                <List sx={{ width: '100%' }}>
                  {navItems.map((item) => (
                    <ListItemButton
                      key={item.title}
                      component={Link}
                      href={`/${locale}/${item.slug}`}
                      onClick={toggleDrawer(false)}
                    >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  ))}
                </List>
              </div>
            </Drawer>
          </Toolbar>
        ) : (
          // Desktop
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link href={`/${locale}/`}>
              <Image
                src='/logo-light.png'
                priority
                alt='Logo'
                width={160}
                height={80}
                style={{ width: 'auto', margin: '4px 0' }}
              />
            </Link>

            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              {navItems.map((item) => {
                const fullPath = `/${locale}/${item.slug}`
                return (
                  <Box
                    key={item.title}
                    sx={{
                      padding: '0 10px',
                      position: 'relative',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#0197dc' },
                      color: isActive(fullPath) ? '#0197dc' : 'inherit',
                      textDecoration: isActive(fullPath) ? 'underline' : 'none',
                      textUnderlineOffset: '25px',
                      fontSize: '17px',
                      fontWeight: 500
                    }}
                  >
                    <Link href={fullPath}>{item.title}</Link>
                  </Box>
                )
              })}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/*<Select
                id='locale'
                name='Locale'
                value={locale}
                onChange={(e) => changeLanguage(String(e.target.value))}
                sx={{ color: 'black', height: '35px' }}
              >
                <MenuItem value='vi'>🇻🇳 Tiếng Việt</MenuItem>
                <MenuItem value='en'>🇬🇧 English</MenuItem>
              </Select>*/}

              <ButtonContact />
            </Box>
          </Toolbar>
        )}
      </AppBar>
    </div>
  )
}
