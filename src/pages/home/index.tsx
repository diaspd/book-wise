import { useQuery } from '@tanstack/react-query'
import { ChartLineUp } from 'phosphor-react'

import { PageTitle } from '@/components/PageTitle'
import { RatingAuthorAndBook, RatingCard } from '@/components/RatingCard'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'

import { NextPageWithLayout } from '../_app'
import { TrendingBooks } from './components/TrendingBooks'
import { Books, Container, Header, StartContainer } from './styles'

const HomePage: NextPageWithLayout = () => {
  const { data: ratings } = useQuery<RatingAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')

      return data?.ratings ?? []
    },
  })

  return (
    <>
      <Header>
        <PageTitle title="Início" icon={<ChartLineUp size={32} />} />
      </Header>
      <Container>
        <StartContainer>
          <Books>
            <span>Avaliações mais recentes</span>

            {ratings?.map((rating) => {
              return <RatingCard key={rating.id} rating={rating} />
            })}
          </Books>
        </StartContainer>

        <TrendingBooks />
      </Container>
    </>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
