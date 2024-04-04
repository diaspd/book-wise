import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import Link from 'next/link'
import { CaretLeft } from 'phosphor-react'
import { useMemo, useState } from 'react'

import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'

import { ProfileRatingCard } from '../ProfileRatingCard'
import { Container, Goback, RatingsList } from './styles'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

type ProfileRatingsProps = {
  ratings: ProfileRating[]
  isOwnProfile?: boolean
}

export function ProfileRatings({ ratings, isOwnProfile }: ProfileRatingsProps) {
  const [search, setSearch] = useState('')

  const filteredRatings = useMemo(() => {
    return ratings.filter((rating) => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [ratings, search])

  return (
    <Container>
      {isOwnProfile ? (
        <PageTitle icon={<User size={25} />} title="Perfil" />
      ) : (
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Goback>
            <CaretLeft color="#fff" size={24} />
            <span style={{ color: 'white' }}>Voltar</span>
          </Goback>
        </Link>
      )}
      <Input
        placeholder="Buscar livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <RatingsList style={{ marginTop: 40 }}>
        {filteredRatings?.map((rating) => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}
        {filteredRatings.length <= 0 && (
          <>
            <span>
              {search
                ? 'Nenhum resultado encontrado'
                : 'Nenhuma avaliação encontrada'}
            </span>
          </>
        )}
      </RatingsList>
    </Container>
  )
}
