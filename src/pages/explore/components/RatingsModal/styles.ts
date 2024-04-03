import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { styled } from '@/styles/index'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: '#00000099',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 660,
  height: '100%',
  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px #00000080',
  padding: '$6 48px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  '@media (max-width: 864px)': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    overflowX: 'hidden',
  },
})

export const DialogClose = styled(Dialog.Close, {
  color: '$gray400',
  background: 'transparent',
  border: 'none',
  marginLeft: 'auto',
  marginBottom: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
    color: '$purple100',
  },
})

export const BookDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',
  padding: '$6 $8',
  borderRadius: '$md',
  minWidth: '250px',

  '@media (max-width: 864px)': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
})

export const BookDetailsContainer = styled('div', {
  display: 'flex',
  gap: '$8',

  '@media (max-width: 500px)': {
    flexDirection: 'column',
  },
})

export const BookImage = styled(Image, {
  borderRadius: '$md',
  objectFit: 'cover',
  minWidth: 171,
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> div': {
    '> span': {
      color: '$gray300',
    },
    '> p': {
      color: '$gray400',
      margin: '$1 0',
    },
  },

  '@media (max-width: 500px)': {
    gap: '$10',
  },
})

export const BookInfos = styled('div', {
  marginTop: 40,
  paddingTop: 24,
  borderTop: '1px solid $gray600',
  display: 'flex',
  gap: 60,

  '@media (max-width: 500px)': {
    flexDirection: 'column',
  },
})
