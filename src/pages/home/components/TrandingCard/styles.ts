import { styled } from '@/styles'
import Link from 'next/link'

export const TrendingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  margin: '0 $4 0 0',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '$4',
    margin: '5.8rem 2rem $1 0',
    alignItems: 'center',
    lineHeight: '$base',

    '@media (max-width: 864px)': {
      marginTop: '$2',
    },
  },

  '@media (max-width: 864px)': {
    width: '100%',
    margin: '$2',
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

export const ListBookCard = styled('section', {
  display: 'flex',
  padding: '$6',
  gap: '$6',
  margin: '$2 $5 $2 0',
  width: '100%',
  background: '$gray700',
  borderRadius: '$md',
  height: 135,

  '@media (max-width: 864px)': {
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content',
  },

  '@media (max-width: 1400px)': {
    height: 'fit-content',
    flexDirection: 'column',
  },
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> section': {
    display: 'flex',
    flexDirection: 'column',

    '> span': {
      color: '$gray400',
    },
  },
})
