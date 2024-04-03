import { styled } from '@/styles/index'

export const Container = styled('div', {
  padding: '$6',
  borderRadius: 8,

  variants: {
    variant: {
      primary: {
        background: '$gray700',
      },
      highlight: {
        background: '$gray600',
      },
    },
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: '$5',
  minWidth: '200px',

  '> section': {
    display: 'flex',
    gap: '$4',

    '> div': {
      '> strong': {
        display: 'block',
      },

      '@media (max-width: 400px)': {
        paddingBottom: '$4',
      },
    },
  },

  '@media (max-width: 400px)': {
    flexDirection: 'column',
  },
})
