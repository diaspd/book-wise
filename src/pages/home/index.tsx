import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { CaretLeft, CaretRight, ChartLineUp } from 'phosphor-react'

import { PageTitle } from '@/components/PageTitle'
import { RatingAuthorAndBook, RatingCard } from '@/components/RatingCard'
import { SeeAllLink } from '@/components/TrendingBooks/styles'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'
import {
  Books,
  Container,
  Header,
  LatestContainer,
  StartContainer,
} from '@/styles/pages/home'

import { TrendingBooks } from '../../components/TrendingBooks'
import { NextPageWithLayout } from '../_app'

const HomePage: NextPageWithLayout = () => {
  const { data: ratings } = useQuery<RatingAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')

      return data?.ratings ?? []
    },
  })

  const { data: session } = useSession()

  const userId = session?.user?.id

  const { data: latestUserRating } = useQuery<RatingAuthorAndBook>({
    queryKey: ['latest-user-rating', userId],
    queryFn: async () => {
      const { data } = await api.get('/ratings/user-latest')
      return data?.rating ?? null
    },
    enabled: !!userId,
  })

  return (
    <>
      <Header>
        <PageTitle title="Início" icon={<ChartLineUp size={32} />} />
      </Header>
      <Container>
        <StartContainer>
          {latestUserRating && (
            <LatestContainer>
              <header>
                <span>Sua ultima avaliação</span>

                <SeeAllLink href={`profile/${userId}`}>
                  Ver todas <CaretRight />{' '}
                </SeeAllLink>
              </header>

              <RatingCard variant="secondary" rating={latestUserRating} />
            </LatestContainer>
          )}

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
