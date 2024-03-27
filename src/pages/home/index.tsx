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

            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <RatingCard
                  key={i}
                  rating={{
                    id: 'aa',
                    book_id: '55',
                    description: 'fdsfds',
                    user_id: '115',
                    rate: 4,
                    user: {
                      name: 'Pedro D',
                      avatar_url: 'https://github.com/diaspd.png',
                      email: 'pedro@gmail.com',
                      id: 'fdsfdsfsd',
                      created_at: new Date(),
                    },
                    book: {
                      author: 'John Doe',
                      cover_url: 'https://github.com/diaspd.png',
                      id: '2',
                      name: 'Biografia',
                      summary:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sint dolorem aspernatur qui quod eum ducimus excepturi ab doloremque, eveniet perferendis. Veniam ipsam maiores ducimus et. Iure, sapiente. Maiores, assumenda.',
                      created_at: new Date(),
                      total_pages: 5,
                    },
                    created_at: new Date(),
                  }}
                />
              )
            })}
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
