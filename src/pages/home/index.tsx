import { useSession } from 'next-auth/react'
import Image from 'next/image'

import {
  Container,
  StartContainer,
  TrendingContainer,
  Books,
  ListBookCard,
  BookContent,
  SeeAllLink,
  TitleContainer,
  BookImage,
  AvatarImage,
} from './styles'

import GraphImg from '../../assets/graph.svg'
import { CaretRight } from 'phosphor-react'

import { Stars } from '@/components/Stars'
import { BookCardVariant } from './components/BookCardVariant'
import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Ratingcard } from '@/components/RatingCard'

const HomePage: NextPageWithLayout = () => {
  return (
    <Container>
      <StartContainer>
        <TitleContainer>
          <Image src={GraphImg} width={32} height={32} alt="" />
          <h1>Início</h1>
        </TitleContainer>

        <BookCardVariant />

        <Books>
          <span>Avaliações mais recentes</span>

          <Ratingcard />
          <Ratingcard />
          <Ratingcard />
        </Books>
      </StartContainer>

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
            <div>
              <Stars />
            </div>
          </BookContent>
        </ListBookCard>
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
            <div>
              <Stars />
            </div>
          </BookContent>
        </ListBookCard>
      </TrendingContainer>
    </Container>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
