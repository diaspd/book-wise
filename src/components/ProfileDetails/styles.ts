import { styled } from '@/styles/index'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: '1px solid $gray700',
  height: 'max-content',

  '@media (max-width: 864px)': {
    borderLeft: '0',
    borderTop: '1px solid $gray700',
    paddingTop: '$8',
    paddingBottom: '$4',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&::after': {
    content: "''",
    display: 'block',
    width: 32,
    height: 4,
    background: '$gradient-horizontal',
    borderRadius: '$full',
    marginTop: 40,
  },

  '> strong': {
    marginTop: 20,
    fontSize: '$xl',
  },

  '> span': {
    color: '$gray400',
  },
})

export const ProfileDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  marginTop: 50,
})
