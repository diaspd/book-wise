import { Container } from './styles'
import { Star } from '@phosphor-icons/react'
import { ComponentProps } from '@stitches/react'

type RatingStarsProps = ComponentProps<typeof Container> & {
  rating: number
  size?: 'sm' | 'md' | 'lg'
}

export function Stars({ rating, size = 'sm', ...props }: RatingStarsProps) {
  return (
    <Container size={size} {...props}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          weight={index + 1 <= rating ? 'fill' : 'regular'}
        />
      ))}
    </Container>
  )
}
