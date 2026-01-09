'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@mui/material'
import FormSearchName from './FormSearchName'

interface PopupSearchNameProps {
  open?: boolean
  onClose?: () => void
  autoOpen?: boolean
  delay?: number
}

export default function PopupSearchName({ open, onClose, autoOpen = false, delay = 500 }: PopupSearchNameProps) {
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
          borderRadius: '20px',
          overflow: 'hidden',
          maxHeight: '300px'
        }
      }}
    >
      <FormSearchName />
    </Dialog>
  )
}
