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
  width: '100%',
  maxWidth: '372px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: 20,

  section: {
    marginTop: 40,
  },

  p: {
    color: '$gray200',
  },

  '@media (max-width: 864px)': {
    margin: '$2',
  },
})
