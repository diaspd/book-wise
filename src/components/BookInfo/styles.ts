import { styled } from '@/styles/index'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  '> div': {
    display: 'grid',

    '> span': {
      color: '$gray300',
    },

    '> p': {
      color: '$gray200',
    },
  },

  svg: {
    width: 24,
    height: 24,
    color: '$green100',
  },
})
