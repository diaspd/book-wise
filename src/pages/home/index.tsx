import Image from 'next/image'

import { Container, StartContainer, Books, TitleContainer } from './styles'

import GraphImg from '../../assets/graph.svg'

import { BookCardVariant } from './components/BookCardVariant'
import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Ratingcard } from '@/components/RatingCard'
import { TrandingCard } from './components/TrandingCard'

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

      <TrandingCard />
    </Container>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
