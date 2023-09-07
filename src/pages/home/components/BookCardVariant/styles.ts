import Image from 'next/image'
import { styled } from '../../../../styles/index'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'flex',
  paddingBottom: '$4',

  '@media (max-width: 864px)': {
    display: 'flex',
    padding: '$2 2rem',
    flexDirection: 'column',
  },
})

export const Book = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'flex-start',
  flexDirection: 'column',

  paddingRight: '$2',
  paddingBottom: '$6',

  '> div': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },

  gap: '$4',
  maxWidth: 800,

  '@media (max-width: 864px)': {
    width: '100%',
  },
})

export const BookCard = styled('div', {
  display: 'flex',
  padding: '$6',
  flexDirection: 'column',
  background: '$gray600',
  borderRadius: '$md',
  height: 192,

  [`> div`]: {
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    gap: '$2',

    [`> div`]: {
      display: 'flex',
      flexDirection: 'column',

      [`> span`]: {
        marginBottom: '$3',
        color: '$gray400',
      },
    },

    p: {
      height: '50px',
      overflow: 'hidden',
      fontSize: '$sm',
      lineHeight: '$base',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',

    div: {
      display: 'flex',
      flexDirection: 'column',

      span: {
        fontSize: '$md',
      },

      [`> p`]: {
        color: '$gray300',
        fontSize: '$sm',
      },
    },
  },

  '@media (max-width: 864px)': {
    width: '100%',
  },
})

export const SeeAllLink = styled(Link, {
  color: '$purple100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease-out',

  '&:hover': {
    color: '$purple200',
  },
})

export const BookCardImage = styled(Image, {
  borderRadius: '$md',
  marginRight: '$2',
  height: 152,
  width: 108,
})
