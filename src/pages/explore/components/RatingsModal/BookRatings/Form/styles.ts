import { styled } from '@/styles/index'

export const Container = styled('div', {
  background: '$gray700',
  padding: '$6',
  borderRadius: 8,
  minWidth: '250px',
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },

  '@media (max-width: 500px)': {
    flexDirection: 'column',
    alignItems: 'start',
    gap: '$4',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$6',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$2',

  '> button': {
    width: 40,
    height: 40,
    borderRadius: 4,
    background: '$gray600',
    transition: '0.2s',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      width: 24,
      height: 24,
    },

    '&:not(:disabled):hover': {
      background: '$gray500',
    },

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})
