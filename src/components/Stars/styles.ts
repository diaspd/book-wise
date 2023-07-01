import { styled } from "@/styles";

export const StarInput = styled('input', {
  backgroundImage: `url('../assets/star.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#5e60ce',
})

export const StarLabel = styled('label', {
  color: '#90A0A3',
  float: 'right',

  '&:before': {
    margin: '5px',
    fontSize: '2em',
    content: "\f005",
    display: 'inline-block',
  },

  '&:hover': {
    color: '#FECE31',
  }
})
