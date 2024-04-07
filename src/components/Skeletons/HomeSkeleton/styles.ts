import { keyframes, styled } from '@/styles'

const skeletonAnimation = keyframes({
  '0%': {
    backgroundColor: '$gray600',
  },

  '100%': {
    backgroundColor: '$gray700',
  },
})

export const Container = styled('div', {
  display: 'grid',

  '> span': {
    animation: `${skeletonAnimation} 2300ms ease-in-out infinite`,
    height: 10,
    marginBottom: '$3',
    width: '50%',
    display: 'block',
    borderRadius: '$md',
    marginTop: '$5',
  },

  '> div': {
    animation: `${skeletonAnimation} 2300ms ease-in-out infinite`,
    height: 200,
    width: '100%',
    borderRadius: '$md',
    background: '$gray900',
    marginTop: '$4',
  },
})
