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

  '> section': {
    animation: `${skeletonAnimation} 2300ms ease-in-out infinite`,
    height: 45,
    marginBottom: '$3',
    width: '30%',
    display: 'block',
    borderRadius: '$md',
  },

  '> div': {
    animation: `${skeletonAnimation} 2300ms ease-in-out infinite`,
    height: 45,
    marginBottom: '$3',
    width: '100%',
    display: 'block',
    borderRadius: '$md',
    marginTop: '$5',
  },

  '> span': {
    animation: `${skeletonAnimation} 2300ms ease-in-out infinite`,
    height: 10,
    width: '50%',
    display: 'block',
    borderRadius: '$md',
    marginTop: '$5',
  },

  '> main': {
    animation: `${skeletonAnimation} 2300ms ease-in-out infinite`,
    height: 200,
    width: '100%',
    borderRadius: '$md',
    marginTop: '$4',
  },
})
