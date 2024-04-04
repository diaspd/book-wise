import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Link from 'next/link'

import { Stars } from '@/components/Stars'

import { ProfileRating } from '../ProfileRatings'
import { BookDetails, BookImage, CardContent, Container } from './styles'

type ProfileRatingCardProps = {
  rating: ProfileRating
}

export function ProfileRatingCard({ rating }: ProfileRatingCardProps) {
  const distance = formatDistanceToNow(new Date(rating.created_at), {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <Container>
      <span>{distance}</span>

      <CardContent>
        <BookDetails>
          <Link
            style={{ display: 'flex' }}
            href={`/explore?book=${rating.book_id}`}
          >
            <BookImage
              src={rating.book.cover_url}
              alt={rating.book.name}
              width={98}
              height={134}
            />
          </Link>
          <section>
            <div>
              <h3>{rating.book.name}</h3>
              <span>{rating.book.author}</span>
            </div>

            <Stars rating={rating.rate} />
          </section>
        </BookDetails>
        <p>{rating.description}</p>
      </CardContent>
    </Container>
  )
}
