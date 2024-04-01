import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { ReactElement, useState } from 'react'

import { BookCard, BookWithAverageRating } from '@/components/BookCard'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'

import { NextPageWithLayout } from '../_app'
import { Tag } from './components/Tags'
import { BooksGrid, ExploreContainer, TagsContainer } from './styles'

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const [isCategorySelected, setIsCategorySelected] = useState<string | null>(
    null,
  )

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await api.get('/books/categories')

      return data?.categories ?? []
    },
  })

  const { data: books } = useQuery<BookWithAverageRating[]>({
    queryKey: ['books', isCategorySelected],
    queryFn: async () => {
      const { data } = await api.get('/books', {
        params: {
          category: isCategorySelected,
        },
      })
      return data?.books ?? []
    },
  })

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

      <TagsContainer>
        <Tag
          active={isCategorySelected === null}
          onClick={() => {
            setIsCategorySelected(null)
          }}
        >
          Tudo
        </Tag>

        {categories?.map((category) => (
          <Tag
            key={category.id}
            active={isCategorySelected === category.id}
            onClick={() => setIsCategorySelected(category.id)}
          >
            {category.name}
          </Tag>
        ))}
      </TagsContainer>

      <BooksGrid>
        {books?.map((book) => <BookCard key={book.id} size="lg" book={book} />)}
      </BooksGrid>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
