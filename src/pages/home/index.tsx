import { useQuery } from '@tanstack/react-query'

import { Header } from '@/components/Header'
import { RatingAuthorAndBook, RatingCard } from '@/components/RatingCard'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'

import { NextPageWithLayout } from '../_app'
import { TrendingBooks } from './components/TrendingBooks'
import { Books, Container, StartContainer } from './styles'

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
      <Header />
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
