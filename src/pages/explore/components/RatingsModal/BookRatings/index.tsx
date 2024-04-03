import { useSession } from 'next-auth/react'
import { Fragment, useState } from 'react'

import { Form } from './Form'
import { LoginModal } from './LoginModal'
import { Container } from './styles'
import { RatingWithAuthor, UserCard } from './UserCard'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export function BookRatings({ bookId, ratings }: BookRatingsProps) {
  const { status, data: session } = useSession()
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === 'authenticated'
  const RatingWrapper = isAuthenticated ? Fragment : LoginModal

  const sortedRatingsByCreationDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every((x) => x.user_id !== session?.user?.id)

  const handleRate = () => {
    if (!isAuthenticated) return
    setShowForm(true)
  }

  return (
    <Container>
      <header>
        <span>Avaliações</span>

        {canRate && (
          <RatingWrapper>
            <button onClick={handleRate}>Avaliar</button>
          </RatingWrapper>
        )}
      </header>

      <section>
        {showForm && (
          <Form bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {sortedRatingsByCreationDate.map((rating) => (
          <UserCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
