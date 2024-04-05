import { styled } from '@/styles/index'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 40,
  width: '100%',

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '$4',

    '> button': {
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
    },
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})
