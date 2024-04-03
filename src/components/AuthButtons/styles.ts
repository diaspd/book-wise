import { styled } from '@/styles/index'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const AuthButton = styled('button', {
  width: '100%',
  maxWidth: '372px',
  height: 72,
  background: '$gray600',
  border: 'none',
  color: '$gray200',
  fontWeight: '$bold',
  fontSize: '$lg',
  borderRadius: 8,
  padding: '0 $6',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  transition: '0.2s',

  '&:hover': {
    background: '$gray500',
  },

  '@media (max-width: 864px)': {
    width: '90%',
    marginBottom: '$2',
  },
})
