import Image from 'next/image'
import Link from 'next/link'

import { styled } from '../../styles/index'

export const Header = styled('header', {
  marginBottom: 40,

  '@media (max-width: 864px)': {
    marginLeft: 30,
    marginTop: 8,
  },
})

export const Container = styled('div', {
  display: 'grid',
  height: '100%',

  gridTemplateColumns: '2fr 1fr',
  gap: 64,

  overflow: 'hidden',

  '@media (max-width: 864px)': {
    display: 'flex',
    padding: '$2 $6',
    height: '75rem',
    flexDirection: 'column',
    gap: '$5',
  },
})

export const LogoImg = styled(Link, {})

export const StartContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  paddingBottom: '8rem',

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@media (max-width: 864px)': {
    width: '100%',
    height: '100%',
    margin: '$2',
    paddingBottom: '1rem',
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

export const LatestContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,
  marginTop: 15,

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$4',
    marginBottom: '$4',
  },
})
