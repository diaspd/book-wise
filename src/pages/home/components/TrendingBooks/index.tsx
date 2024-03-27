import { CaretRight } from 'phosphor-react'
import {
  BookContent,
  ListBookCard,
  SeeAllLink,
  TrendingContainer,
} from './styles'
import { BookImage } from '../../styles'
import { Stars } from '@/components/Stars'

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

      <ListBookCard>
        <BookImage
          src="https://github.com/diaspd.png"
          width={64}
          height={94}
          alt=""
        />
        <BookContent>
          <section>
            <strong>A revolução dos bichos</strong>
            <span>George Orwell</span>
          </section>
          <div>{/* <Stars /> */}</div>
        </BookContent>
      </ListBookCard>
    </TrendingContainer>
  )
}
