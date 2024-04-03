import { styled } from '@/styles/index'

export const Container = styled('div', {
  background: '$gray700',
  padding: '$6',
  borderRadius: 8,
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
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$6',

  '> textarea': {
    flex: 1,
    padding: '0.875rem $5',
    color: '$gray100',
    fontSize: '0.875rem',
    resize: 'none',
    minHeight: '136px',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
    },

    background: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: 4,
    transition: '0.2s',
    border: '1px solid $gray800',

    '&:focus-within': {
      border: '1px solid $green200',
    },
  },
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
