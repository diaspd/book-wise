import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { ReactElement, useState } from 'react'

import { BookCard, BookWithAverageRating } from '@/components/BookCard'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { ExploreSkeleton } from '@/components/Skeletons/ExploreSkeleton'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'
import {
  BooksGrid,
  ExploreContainer,
  TagsContainer,
} from '@/styles/pages/explore'

import { Tag } from '../../components/Tags'
import { NextPageWithLayout } from '../_app'

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const [isCategorySelected, setIsCategorySelected] = useState<string | null>(
    null,
  )

  const { data: categories, isLoading: isCategoriesLoading } = useQuery<
    Category[]
  >({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await api.get('/books/categories')

      return data?.categories ?? []
    },
  })

  const { data: books, isLoading: isBooksLoading } = useQuery<
    BookWithAverageRating[]
  >({
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

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
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

        {isCategoriesLoading ? (
          <>
            {Array.from({ length: 12 }).map((_, i) => {
              return <Tag key={i}> </Tag>
            })}
          </>
        ) : (
          <>
            {categories?.map((category) => (
              <Tag
                key={category.id}
                active={isCategorySelected === category.id}
                onClick={() => setIsCategorySelected(category.id)}
              >
                {category.name}
              </Tag>
            ))}
          </>
        )}
      </TagsContainer>

      <BooksGrid>
        {isBooksLoading ? (
          <ExploreSkeleton />
        ) : (
          <>
            {filteredBooks?.map((book) => (
              <BookCard key={book.id} size="lg" book={book} />
            ))}
          </>
        )}
      </BooksGrid>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
