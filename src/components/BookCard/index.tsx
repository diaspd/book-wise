import { Book } from '@prisma/client'

import { Stars } from '../Stars'
import { BookDetails, BookImage, BookName, Container } from './styles'

export type BookWithAverageRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

type BookCardProps = {
  book: BookWithAverageRating
  size?: 'md' | 'lg'
}

export const BookCard = ({ book, size = 'md' }: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 152,
    },
  }

  return (
    <div>
      <Container>
        <BookImage
          width={IMAGE_SIZES[size].width}
          height={IMAGE_SIZES[size].height}
          alt={book.name}
          src={book.cover_url}
        />
        <BookDetails>
          <div>
            <BookName>{book.name}</BookName>
            <p>{book.author}</p>
          </div>

          <Stars rating={book.avgRating} />
        </BookDetails>
      </Container>
    </div>
  )
}
