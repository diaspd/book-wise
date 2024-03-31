import Image from 'next/image'

import { keyframes, styled } from '../../styles/index'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',

  '@media (max-width: 864px)': {
    flexDirection: 'column',
    padding: '$2',
  },
})

const scaleUp = keyframes({
  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
  '20%': { transform: 'translateY(-30px)' },
  '65%': { transform: 'translateY(-15px)' },
})

export const HeroImg = styled(Image, {
  animation: `${scaleUp} 5s ease infinite`,
})

export const Hero = styled('div', {
  width: '35%',
  margin: '$5 auto $5 $5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$md',

  background:
    'linear-gradient(190deg, rgba(2,0,36,0.4099811799719888) 0%, rgba(49,40,121,0.8357514880952381) 38%)',

  '@media (max-width: 864px)': {
    width: 'auto',
    height: '30%',
    margin: '0 $2 $5 $2',
  },
})

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginRight: '20%',
  gap: '$4',

  p: {
    marginTop: '-$4',
    marginBottom: '$8',
  },

  '@media (max-width: 864px)': {
    margin: '$2',
  },
})

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  padding: '$5',
  alignItems: 'center',
  width: '372px',
  borderRadius: '$md',
  backgroundColor: '$gray600',
  color: '$white',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  gap: '$4',

  '&:hover': {
    backgroundColor: '$gray700',
    color: '$white',
  },

  '@media (max-width: 864px)': {
    width: '90%',
    marginBottom: '$2',
  },
})
