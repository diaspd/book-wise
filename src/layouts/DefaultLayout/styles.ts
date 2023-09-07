import { styled } from '@/styles'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'grid',
  width: '100%',
  height: '100vh',
  gridTemplateColumns: 'auto 1fr',
})

export const Content = styled('div', {
  width: '100%',
  height: '100vh',
  maxWidth: 996,
  margin: '0 auto',
  paddingTop: 72,
})

export const Sidebar = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: 234,
  height: 'calc(100% - 40px)',

  margin: 20,
  borderRadius: '$md',

  paddingTop: '$4',
  paddingBottom: '$2',

  background:
    'linear-gradient(190deg, rgba(2,0,36,0.4099811799719888) 0%, rgba(49,40,121,0.8357514880952381) 38%)',

  '@media (max-width: 864px)': {
    width: '100%',
    height: '50%',
    gap: '$4',
  },
})

export const LogoImg = styled(Link, {})

export const LinkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '$6',
  marginTop: '4rem',
  justifyContent: 'center',
})

export const StyledLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  textDecoration: 'none',
  color: '$gray400',
  paddingLeft: '$4',
  fontSize: '$md',
  fontWeight: 'bold',
  borderLeft: `3px solid transparent`,
  borderRadius: '$xs',
  transition: 'all 0.4s ease-in-out',

  '&:hover': {
    color: '$gray100',
  },

  '&::before': {
    content: "''",
    width: 4,
    height: 24,
    background: '$gradient-vertical',
    marginRight: '$4',
    borderRadius: '$full',
    transition: '0.2s',
    opacity: 0,
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',

        '&::before': {
          opacity: 1,
        },
      },
    },
  },
})

export const SignInLink = styled(Link, {
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  margin: 'auto $8 $2 $8',
  color: '$gray200',
  fontWeight: 'bold',
  paddingBottom: '$4',

  '&:hover': {
    color: '$gray100',
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  p: {
    fontWeight: '500',
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
