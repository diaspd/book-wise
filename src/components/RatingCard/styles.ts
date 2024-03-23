import { styled } from '@/styles'
import Image from 'next/image'

export const BookCard = styled('div', {
  display: 'flex',
  padding: '$6',
  flexDirection: 'column',
  background: '$gray700',
  borderRadius: '$md',
  height: 290,

  [`> div`]: {
    marginTop: '$8',
    display: 'grid',
    gap: '$2',
    gridTemplateColumns: '1fr 5fr',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',

    section: {
      display: 'flex',
      gap: '$4',

      div: {
        display: 'flex',
        flexDirection: 'column',
      },
    },

    div: {
      display: 'flex',
      flexDirection: 'row',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray400',
        fontSize: '$sm',
      },
    },
  },

  '@media (max-width: 864px)': {
    width: '100%',
  },
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  [`> span`]: {
    marginBottom: '$3',
    color: '$gray300',
  },

  p: {
    height: '88px',
    overflow: 'hidden',
    fontSize: '$sm',
    lineHeight: '$base',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
})

export const BookCardImage = styled(Image, {
  borderRadius: '$md',
  marginRight: '$2',
  height: 152,
  width: 108,
})
