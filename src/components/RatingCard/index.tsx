import { Book, Rating, User } from '@prisma/client'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Link from 'next/link'

import { useToggleShowMore } from '@/hooks/useToggleShowMore'

import { Avatar } from '../Avatar'
import { Stars } from '../Stars'
import {
  BookCard,
  BookCardImage,
  Description,
  Details,
  ShowMoreButton,
} from './styles'

export type RatingAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingAuthorAndBook
  variant?: 'default' | 'secondary'
}

const MAX_SUMMARY_LENGTH = 200

export function RatingCard({ rating, variant = 'default' }: RatingCardProps) {
  const distance = formatDistanceToNow(new Date(rating.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  return (
    <BookCard variant={variant}>
      {variant === 'default' && (
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
      )}
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
          {variant === 'secondary' && (
            <Details>
              <span>{distance}</span>

              <Stars rating={rating.rate} />
            </Details>
          )}
          <strong>{rating.book.name}</strong>
          <span>{rating.book.author}</span>
          {bookSummary}
          {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
            <ShowMoreButton onClick={toggleShowMore}>
              {isShowingMore ? 'ver menos' : 'ver mais'}
            </ShowMoreButton>
          )}
        </div>
      </Description>
    </BookCard>
  )
}
