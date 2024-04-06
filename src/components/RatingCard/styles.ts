import Image from 'next/image'

import { styled } from '@/styles'

export const BookCard = styled('div', {
  display: 'flex',
  padding: '$6',
  flexDirection: 'column',
  borderRadius: '$md',
  width: '100%',

  [`> div`]: {
    marginTop: '$8',
    display: 'grid',
    gap: '$2',
    gridTemplateColumns: '1fr 5fr',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',

    section: {
      display: 'flex',
      gap: '$4',

      div: {
        display: 'flex',
        flexDirection: 'column',
      },
    },

    div: {
      display: 'flex',
      flexDirection: 'row',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray400',
        fontSize: '$sm',
      },
    },
  },

  '@media (max-width: 864px)': {
    width: '100%',
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '$gray700',
      },
      secondary: {
        backgroundColor: '$gray600',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
})

export const Description = styled('div', {
  display: 'grid',
  gap: '$1',

  [`> div`]: {
    [`> span`]: {
      marginBottom: '$4',
      color: '$gray300',
      display: 'block',
      width: '100%',
    },
  },
})

export const BookCardImage = styled(Image, {
  borderRadius: '$md',
  marginRight: '$2',
  height: 152,
  width: 108,

  transition: '0.2s',

  '&:hover': {
    filter: 'brightness(1.1)',
  },
})

export const Details = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$3',
})

export const ShowMoreButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '0.875rem',
  color: '$purple100',
  fontWeight: '$bold',
  marginLeft: '$1',
  fontFamily: 'inherit',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    cursor: 'pointer',
    color: '$purple200',
  },
})
