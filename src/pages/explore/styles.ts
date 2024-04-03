import { styled } from '@/styles/index'

export const ExploreContainer = styled('section', {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 864px)': {
      flexDirection: 'column',
      padding: '0 $6',
    },

    '> div': {
      width: '100%',
      maxWidth: '433px',

      '@media (max-width: 864px)': {
        marginTop: '$4',
      },
    },
  },

  '@media (max-width: 864px)': {
    padding: '$2 2rem',
    height: '60rem',
  },
})

export const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginTop: 40,
  marginBottom: 48,

  '@media (max-width: 864px)': {
    padding: '0 $6',
  },
})

export const BooksGrid = styled('div', {
  display: 'grid',
  height: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridAutoRows: 188,
  gap: '$5',
  overflowY: 'auto',
  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@media (max-width: 1150px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 864px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '0 $6',
  },
})
