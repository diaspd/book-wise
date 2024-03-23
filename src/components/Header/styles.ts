import { styled } from '@/styles'

export const TitleContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  lineHeight: '$base',
  marginBottom: '$10',

  '@media (max-width: 864px)': {
    margin: '0 $10',
  },
})
