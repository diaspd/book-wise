import Image from 'next/image'
import { styled } from '../../styles/index'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'grid',
  height: '100%',

  gridTemplateColumns: '1fr 308px',
  gap: 64,

  overflow: 'hidden',

  '@media (max-width: 864px)': {
    display: 'flex',
    padding: '$2 2rem',
    flexDirection: 'column',
  },
})

export const LogoImg = styled(Link, {})

export const StartContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '$4',

  paddingBottom: '5rem',

  overflowY: 'auto',
  height: '100%',
  width: '100%',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@media (max-width: 864px)': {
    width: '100%',
    height: '30%',
    margin: '$2',
  },
})

export const TitleContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  lineHeight: '$base',
  marginBottom: '$10',
})

export const Books = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'flex-start',
  flexDirection: 'column',

  paddingRight: '$2',
  paddingBottom: '$4',

  gap: '$4',
  maxWidth: 800,

  '@media (max-width: 864px)': {
    width: '100%',
  },
})

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

export const AvatarImage = styled(Image, {
  borderRadius: '$full',
  borderImage: '$gradient-horizontal',
  border: '2px solid white',
  height: 40,
  width: 40,
})

export const BookImage = styled(Image, {
  borderRadius: '$md',
  height: 94,
  width: 64,
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
