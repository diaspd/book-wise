import { formatDistanceToNow } from 'date-fns'
import { Book, Rating, User } from '@prisma/client'
import { Avatar } from '../Avatar'
import { Stars } from '../Stars'
import { BookCard, BookCardImage, Description, ShowMoreButton } from './styles'
import Link from 'next/link'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useToggleShowMore } from '@/hooks/useToggleShowMore'

export type RatingAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingAuthorAndBook
}

const MAX_SUMMARY_LENGTH = 200

export function RatingCard({ rating }: RatingCardProps) {
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
