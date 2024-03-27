import { Book, Rating, User } from '@prisma/client'
import { Avatar } from '../Avatar'
import { Stars } from '../Stars'
import { BookCard, BookCardImage, Description } from './styles'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export type RatingAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingAuthorAndBook
}

export function RatingCard({ rating }: RatingCardProps) {
  const distance = formatDistanceToNow(new Date(rating.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <BookCard>
      <header>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar
              src={rating.user.avatar_url!}
              alt={rating.user.name}
              size="md"
            />
          </Link>
          <div>
            <span>{rating.user.name}</span>
            <p>{distance}</p>
          </div>
        </section>

        <div>
          <Stars rating={rating.rate} />
        </div>
      </header>
      <Description>
        <Link href={`/explore?book=${rating.book_id}`}>
          <BookCardImage
            src={rating.book.cover_url}
            width={108}
            height={152}
            alt={rating.book.name}
          />
        </Link>
        <div>
          <strong>{rating.book.name}</strong>
          <span>{rating.book.author}</span>
          <p>{rating.book.summary}</p>
        </div>
      </Description>
    </BookCard>
  )
}
