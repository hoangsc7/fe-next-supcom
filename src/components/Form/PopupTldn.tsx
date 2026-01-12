'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent } from '@mui/material'
import FormPopupTldn from './FormPopupTldn'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface PopupTldnProps {
  open?: boolean
  onClose?: () => void
  autoOpen?: boolean
  delay?: number
}

export default function PopupTldn({ open, onClose, autoOpen = true, delay = 6000 }: PopupTldnProps) {
  const [internalOpen, setInternalOpen] = useState(false)

  // Auto open mode
  useEffect(() => {
    if (!autoOpen) return
    const timer = setTimeout(() => setInternalOpen(true), delay)
    return () => clearTimeout(timer)
  }, [autoOpen, delay])

  // popup sẽ lấy state tùy theo mode
  const isOpen = autoOpen ? internalOpen : !!open
  const handleClose = autoOpen ? () => setInternalOpen(false) : onClose

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        sx: {
          position: 'relative',
          borderRadius: '20px',
          overflow: 'visible'
        }
      }}
    >
      <DialogContent
        sx={{
          padding: 0,
          maxHeight: '300px',
          borderRadius: '20px',
          overflowY: 'hidden'
        }}
      >
        <FormPopupTldn />
      </DialogContent>
      <DotLottieReact
        src='/icon/Gift.lottie'
        loop
        autoplay
        style={{
          position: 'absolute',
          top: '-25px',
          right: '-25px',
          width: '90px',
          height: '90px',
          zIndex: 20,
          pointerEvents: 'none' // không cản click
        }}
      />
    </Dialog>
  )
}
