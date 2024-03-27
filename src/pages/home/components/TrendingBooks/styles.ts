import { styled } from '@/styles'
import Link from 'next/link'

export const TrendingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
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

  '> section': {
    marginTop: '$3',
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
