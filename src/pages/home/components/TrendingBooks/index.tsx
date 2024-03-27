import { CaretRight } from 'phosphor-react'
import { SeeAllLink, TrendingContainer } from './styles'
import { BookCard } from '@/components/BookCard'

export function TrendingBooks() {
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
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <BookCard
              key={i}
              book={{
                author: 'John Doe',
                cover_url: 'https://github.com/diaspd.png',
                id: '1',
                alreadyRead: true,
                name: 'Clean Code',
                total_pages: 50,
                avgRating: 3,
                created_at: new Date(),
                summary: 'lorem',
              }}
              size="md"
            />
          )
        })}
      </section>
    </TrendingContainer>
  )
}
