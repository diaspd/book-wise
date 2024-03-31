import { nunito } from '@/pages/_app'

import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: nunito.style.fontFamily,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    fontFamily: 'Nunito',
    '-webkit-font-smoothing': 'antialiased',
    '::-webkit-scrollbar': { width: '.4rem' },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '$gray300',
      borderRadius: '.5rem',
    },
    '::-webkit-track': { backgroundColor: '$gray800' },
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito',
    fontWeight: 400,
  },
})
