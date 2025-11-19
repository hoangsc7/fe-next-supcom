// 'use client'
// import {
//   AppBar,
//   Box,
//   ListItem,
//   ListItemText,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
//   List,
//   IconButton,
//   Drawer,
//   ListItemButton,
//   Collapse,
//   FormControl,
//   Select,
//   MenuItem,
//   FormHelperText
// } from '@mui/material'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'

// // import ThemeSwitch from '~/app/components/theme/ThemeSwitch'
// import { ArrowDropDown, KeyboardArrowRight, Menu, Close, ExpandLess, ExpandMore } from '@mui/icons-material'
// import { useLocale, useTranslations } from 'next-intl'
// import { usePathname, useRouter } from 'next/navigation'

// export default function Header() {
//   // const [openMenu, setOpenMenu] = useState<string | null>(null)
//   const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

//   const [open, setOpen] = React.useState(false)
//   const [openMenuLv1, setOpenMenuLv1] = useState<string | null>(null)
//   const [openMenuLv2, setOpenMenuLv2] = useState<string | null>(null)

//   const handleClear = () => {
//     setOpen(false)
//     setOpenMenuLv1(null)
//     setOpenMenuLv2(null)
//   }

//   const toggleDrawer = (open: boolean) => () => setOpen(open === true || false)

//   const handleToggleMenuLv1 = (title: string) => {
//     setOpenMenuLv1(openMenuLv1 === title ? null : title)
//   }

//   const handleToggleMenuLv2 = (title: string) => {
//     setOpenMenuLv2(openMenuLv2 === title ? null : title)
//   }

//   const [hoveredItem, setHoveredItem] = useState<number | null>(null)
//   const [hoveredSubItem, setHoveredSubItem] = useState<number | null>(null)

//   // locale
//   const locale = useLocale()

//   const t = useTranslations('navbar')
//   const router = useRouter()
//   const pathname = usePathname()

//   const changeLanguage = (newLocale: string) => {
//     const segments = pathname.split('/')
//     segments[1] = newLocale // thay locale trong path
//     const newPath = segments.join('/')
//     router.push(newPath)
//   }

//   // const navItems = [
//   //   { title: t('home'), path: `/${locale}/` },
//   //   // { title: t('about'), path: `/${locale}/gioi-thieu` },
//   //   {
//   //     title: 'Dịch vụ',
//   //     path: '/',
//   //     submenu: [
//   //       {
//   //         title: 'Thành lập doanh nghiệp',
//   //         path: '/dich-vu/thanh-lap-cong-ty',
//   //         submenu: [
//   //           { title: 'Việt Nam', path: '/dich-vu/thanh-lap-cong-ty/viet-nam' },
//   //           { title: 'Nước ngoài', path: '/dich-vu/thanh-lap-cong-ty/nuoc-ngoai' }
//   //         ]
//   //       },
//   //       { title: 'Hộ kinh doanh', path: '/dich-vu/ho-kinh-doanh' },
//   //       { title: 'Thay đổi giấy phép kinh doanh', path: '/dich-vu/thay-doi-giay-phep-kinh-doanh' },
//   //       { title: 'GIải thế', path: '/dich-vu/giai-the' },
//   //       { title: 'Bảo hộ thương hiệu', path: '/dich-vu/bao-ho-thuong-hieu' },
//   //       { title: 'GIải pháp lao động', path: '/dich-vu/giai-phap-lao-dong' }
//   //     ]
//   //   },
//   //   {
//   //     title: 'Sản phẩm',
//   //     path: '/san-pham',
//   //     submenu: [
//   //       { title: 'Chữ ký số', path: '/san-pham/chu-ky-so' },
//   //       { title: 'Hóa đơn điện tử', path: '/san-pham/hoa-don-dien-tu' },
//   //       { title: 'Bảo hiểm xã hội', path: '/san-pham/bao-hiem-xa-hoi' }
//   //     ]
//   //   },
//   //   {
//   //     title: 'Tư vấn',
//   //     path: '/tu-van',
//   //     submenu: [
//   //       { title: 'Tư vấn luật', path: '/tu-van/tu-van-luat' },
//   //       { title: 'Tư vấn kế toán', path: '/tu-van/tu-van-ke-toan' },
//   //       { title: 'Tư vấn chữ ký số', path: '/tu-van/tu-van-chu-ky-so' },
//   //       { title: 'Tư vấn hóa đơn điện tử', path: '/san-pham/tu-van-hoa-don-dien-tu' }
//   //     ]
//   //   }
//   // ]
//   const navItems = [
//     { title: t('home'), path: `/${locale}/` },
//     // { title: t('about'), path: `/${locale}/gioi-thieu` },
//     {
//       title: 'Dịch vụ',
//       path: '/dich-vu'
//       // submenu: [
//       //   {
//       //     title: 'Thành lập doanh nghiệp',
//       //     path: '/dich-vu/thanh-lap-cong-ty',
//       //     submenu: [
//       //       { title: 'Việt Nam', path: '/dich-vu/thanh-lap-cong-ty/viet-nam' },
//       //       { title: 'Nước ngoài', path: '/dich-vu/thanh-lap-cong-ty/nuoc-ngoai' }
//       //     ]
//       //   },
//       //   { title: 'Hộ kinh doanh', path: '/dich-vu/ho-kinh-doanh' },
//       //   { title: 'Thay đổi giấy phép kinh doanh', path: '/dich-vu/thay-doi-giay-phep-kinh-doanh' },
//       //   { title: 'GIải thế', path: '/dich-vu/giai-the' },
//       //   { title: 'Bảo hộ thương hiệu', path: '/dich-vu/bao-ho-thuong-hieu' },
//       //   { title: 'GIải pháp lao động', path: '/dich-vu/giai-phap-lao-dong' }
//       // ]
//     },
//     {
//       title: 'Sản phẩm',
//       path: '/san-pham'
//       // submenu: [
//       //   { title: 'Chữ ký số', path: '/san-pham/chu-ky-so' },
//       //   { title: 'Hóa đơn điện tử', path: '/san-pham/hoa-don-dien-tu' },
//       //   { title: 'Bảo hiểm xã hội', path: '/san-pham/bao-hiem-xa-hoi' }
//       // ]
//     },
//     {
//       title: 'Tư vấn',
//       path: '/tu-van'
//       // submenu: [
//       //   { title: 'Tư vấn luật', path: '/tu-van/tu-van-luat' },
//       //   { title: 'Tư vấn kế toán', path: '/tu-van/tu-van-ke-toan' },
//       //   { title: 'Tư vấn chữ ký số', path: '/tu-van/tu-van-chu-ky-so' },
//       //   { title: 'Tư vấn hóa đơn điện tử', path: '/san-pham/tu-van-hoa-don-dien-tu' }
//       // ]
//     }
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
//               <Link href='/' key='logo'>
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
//                     <IconButton edge='end' color='inherit' onClick={handleClear}>
//                       <Close />
//                     </IconButton>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <Drawer anchor='top' open={open} onClose={handleClear}>
//               <div className='mt-18'>
//                 <List sx={{ width: '100%', textTransform: 'uppercase' }}>
//                   {navItems.map((item) => (
//                     <div key={item.title}>
//                       <ListItemButton
//                         onClick={() => (item.submenu ? handleToggleMenuLv1(item.title) : handleClear())}
//                         component={!item.submenu ? Link : 'div'}
//                         href={!item.submenu ? item.path : undefined}
//                       >
//                         <ListItemText primary={item.title} />
//                         {item.submenu && (openMenuLv1 === item.title ? <ExpandLess /> : <ExpandMore />)}
//                       </ListItemButton>

//                       {/* submenu lv1*/}
//                       {item.submenu && (
//                         <Collapse in={openMenuLv1 === item.title} timeout='auto' unmountOnExit>
//                           <List component='div' disablePadding>
//                             {item.submenu.map((sub) => (
//                               <div key={sub.title}>
//                                 <ListItemButton
//                                   key={sub.title}
//                                   sx={{ pl: 4 }}
//                                   onClick={() => (sub.submenu ? handleToggleMenuLv2(sub.title) : handleClear())}
//                                   component={!sub.submenu ? Link : 'div'}
//                                   href={!sub.submenu ? sub.path : undefined}
//                                 >
//                                   <ListItemText primary={sub.title} />
//                                   {sub.submenu && (openMenuLv2 === sub.title ? <ExpandLess /> : <ExpandMore />)}
//                                 </ListItemButton>

//                                 {/* submenu lv2 */}
//                                 {sub.submenu && (
//                                   <Collapse in={openMenuLv2 === sub.title} timeout='auto' unmountOnExit>
//                                     <List component='div' disablePadding>
//                                       {sub.submenu.map((child) => (
//                                         <ListItemButton
//                                           key={child.title}
//                                           sx={{ pl: 6 }}
//                                           component={Link}
//                                           href={child.path}
//                                           onClick={handleClear}
//                                         >
//                                           <ListItemText primary={child.title} />
//                                         </ListItemButton>
//                                       ))}
//                                     </List>
//                                   </Collapse>
//                                 )}
//                               </div>
//                             ))}
//                           </List>
//                         </Collapse>
//                       )}
//                     </div>
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
//                 gap: 5,
//                 justifyContent: 'center',
//                 textTransform: 'uppercase',
//                 margin: '0 20px',
//                 position: 'relative'
//               }}
//             >
//               {navItems.map((item, index) => (
//                 <Box
//                   key={item.title}
//                   sx={{ position: 'relative', transition: 'color 0.2s', '&:hover': { color: '#0197dc' } }}
//                   onMouseEnter={() => setHoveredItem(index)}
//                   onMouseLeave={() => {
//                     setHoveredItem(null)
//                     setHoveredSubItem(null)
//                   }}
//                 >
//                   <Link href={item?.path}>
//                     {item.title}
//                     {item.submenu && (
//                       <span style={{ marginBottom: '2px' }}>
//                         <ArrowDropDown />
//                       </span>
//                     )}
//                   </Link>

//                   {/* SUBMENU lv1 */}
//                   {item.submenu && hoveredItem === index && (
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: '100%',
//                         left: 0,
//                         backgroundColor: 'white',
//                         boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//                         color: 'black',
//                         minWidth: '250px',
//                         zIndex: 10
//                       }}
//                     >
//                       {item.submenu.map((subItem, subIndex) => (
//                         <Box
//                           key={subItem.title}
//                           sx={{
//                             width: '270px',
//                             position: 'relative',
//                             padding: '10px 15px',
//                             cursor: 'pointer',
//                             transition: 'color 0.2s',
//                             '&:hover': { color: '#0197dc' }
//                           }}
//                           onMouseEnter={() => setHoveredSubItem(subIndex)}
//                           onMouseLeave={() => setHoveredSubItem(null)}
//                         >
//                           <Link
//                             href={subItem.path}
//                             style={{
//                               display: 'flex'
//                             }}
//                           >
//                             {subItem.title}
//                             {subItem.submenu && <KeyboardArrowRight sx={{ paddingLeft: '8px' }} />}
//                           </Link>

//                           {/* SUBMENU lv2 */}
//                           {subItem.submenu && hoveredSubItem === subIndex && (
//                             <Box
//                               sx={{
//                                 position: 'absolute',
//                                 top: 0,
//                                 left: '100%',
//                                 backgroundColor: 'white',
//                                 boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//                                 color: 'black',
//                                 minWidth: '200px',
//                                 zIndex: 20
//                               }}
//                             >
//                               {subItem.submenu.map((subSub) => (
//                                 <Box
//                                   key={subSub.title}
//                                   sx={{
//                                     padding: '10px 15px',
//                                     transition: 'color 0.2s',
//                                     '&:hover': { color: '#0197dc' }
//                                   }}
//                                 >
//                                   <Link href={subSub.path}>{subSub.title}</Link>
//                                 </Box>
//                               ))}
//                             </Box>
//                           )}
//                         </Box>
//                       ))}
//                     </Box>
//                   )}
//                 </Box>
//               ))}
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
