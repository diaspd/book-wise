import { styled } from '@/styles/index'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const Goback = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 35,
})

export const RatingsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})
