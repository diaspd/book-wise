import { useQuery } from '@tanstack/react-query'
import { CaretRight } from 'phosphor-react'

import { BookCard, BookWithAverageRating } from '@/components/BookCard'
import { api } from '@/lib/axios'

import { SeeAllLink, TrendingContainer } from './styles'

export function TrendingBooks() {
  const { data: trendingBooks } = useQuery<BookWithAverageRating[]>({
    queryKey: ['trending-books'],
    queryFn: async () => {
      const { data } = await api.get('/books/popular')

      return data?.books ?? []
    },
  })

  return (
    <TrendingContainer>
      <div>
        <span> Livros populares</span>
        <SeeAllLink href="/explore">
          Ver todos
          <CaretRight />
        </SeeAllLink>
      </div>

      <section>
        {trendingBooks?.map((book) => {
          return <BookCard key={`popular-${book.id}`} book={book} size="md" />
        })}
      </section>
    </TrendingContainer>
  )
}
