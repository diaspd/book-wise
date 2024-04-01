import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { ReactElement, useState } from 'react'

import { BookCard } from '@/components/BookCard'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { DefaultLayout } from '@/layouts/DefaultLayout'

import { NextPageWithLayout } from '../_app'
import { BooksGrid, ExploreContainer, TagsContainer } from './styles'

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />

        <div>
          <Input
            placeholder="Buscar livro ou autor"
            icon={<MagnifyingGlass size={20} />}
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
      </header>

      <TagsContainer></TagsContainer>

      <BooksGrid>
        {Array.from({ length: 10 }).map((_, i) => (
          <BookCard
            key={i}
            size="lg"
            book={{
              author: 'John Doe',
              id: '1',
              created_at: new Date(),
              summary: 'lorem',
              total_pages: 350,
              avgRating: 3,
              name: 'Code',
              alreadyRead: true,
              cover_url: 'https://github.com/diaspd.png',
            }}
          />
        ))}
      </BooksGrid>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
