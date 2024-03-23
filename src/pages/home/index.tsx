import { Container, StartContainer, Books, TitleContainer } from './styles'

import { BookCardVariant } from './components/BookCardVariant'
import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { RatingCard } from '@/components/RatingCard'
import { TrandingCard } from './components/TrandingCard'
import { PageTitle } from '@/components/PageTitle'
import { ChartLineUp } from 'phosphor-react'

const HomePage: NextPageWithLayout = () => {
  return (
    <Container>
      <StartContainer>
        <TitleContainer>
          <PageTitle title="Início" icon={<ChartLineUp size={32} />} />
        </TitleContainer>

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
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
