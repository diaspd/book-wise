import { styled } from '@/styles/index'

export const Container = styled('div', {
  display: 'flex',
  gap: '$5',
  alignItems: 'center',

  svg: {
    width: 32,
    height: 32,
    color: '$green100',
  },

  '> div': {
    '> strong': {
      display: 'block',
      fontSize: '$xl',
    },
  },
})
