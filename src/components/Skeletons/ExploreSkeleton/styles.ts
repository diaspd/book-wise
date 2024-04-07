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
  animation: `${skeletonAnimation} 2300ms ease-in-out infinite`,
  width: '100%',
  borderRadius: '$md',
  background: '$gray900',
  marginTop: '$1',
})
