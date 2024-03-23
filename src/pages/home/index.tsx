import { Container, StartContainer, Books } from './styles'

import { BookCardVariant } from './components/BookCardVariant'
import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { RatingCard } from '@/components/RatingCard'
import { TrandingCard } from './components/TrandingCard'
import { Header } from '@/components/Header'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <StartContainer>
          <BookCardVariant />

          <Books>
            <span>Avaliações mais recentes</span>

            <RatingCard />
            <RatingCard />
            <RatingCard />
          </Books>
        </StartContainer>

        <TrandingCard />
      </Container>
    </>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
