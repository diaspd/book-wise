import Image from 'next/image'
import Link from 'next/link'

import { styled } from '../../styles/index'

export const Container = styled('div', {
  display: 'grid',
  height: '100%',

  gridTemplateColumns: '2fr 1fr',
  gap: 64,

  overflow: 'hidden',

  '@media (max-width: 864px)': {
    display: 'flex',
    padding: '$2 2rem',
    height: '65rem',
    flexDirection: 'column',
  },
})

export const LogoImg = styled(Link, {})

export const StartContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '$4',

  paddingBottom: '8rem',

  overflowY: 'auto',
  height: '100%',
  width: '100%',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@media (max-width: 864px)': {
    width: '100%',
    height: '100%',
    margin: '$2',
  },
})

export const Books = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '100%',

  paddingRight: '$2',
  marginBottom: '$8',

  gap: '$4',

  '@media (max-width: 864px)': {
    width: '100%',
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
