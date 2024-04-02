import { Rating, User } from '@prisma/client'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { Avatar } from '@/components/Avatar'
import { Stars } from '@/components/Stars'

import { Container, UserDetails } from './styles'

export type RatingWithAuthor = Rating & {
  user: User
}

type UserCardProps = {
  rating: RatingWithAuthor
}

export function UserCard({ rating }: UserCardProps) {
  const { data: session } = useSession()

  const distance = formatDistanceToNow(new Date(rating.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  const isOwner = session?.user?.id === rating.user_id

  return (
    <Container variant={isOwner ? 'highlight' : 'primary'}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar alt="avatar" src={rating.user.avatar_url!} />
          </Link>
          <div>
            <strong>{rating.user.name}</strong>
            <span>{distance}</span>
          </div>
        </section>

        <Stars rating={rating.rate} />
      </UserDetails>

      <span>{rating.description}</span>
    </Container>
  )
}
