import { BookmarkSimple, X } from '@phosphor-icons/react'
import { CategoriesOnBooks, Category } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { BookOpen } from 'phosphor-react'
import { ReactNode, useEffect, useState } from 'react'

import { BookWithAverageRating } from '@/components/BookCard'
import { Stars } from '@/components/Stars'
import { api } from '@/lib/axios'

import { BookInfo } from './BookInfo'
import { BookRatings } from './BookRatings'
import { RatingWithAuthor } from './BookRatings/UserCard'
import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'

type BookDetails = BookWithAverageRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

type RatingsModalProps = {
  bookId: string
  children: ReactNode
}

export function RatingsModal({ bookId, children }: RatingsModalProps) {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const paramBookId = router.query.book as string

  useEffect(() => {
    if (paramBookId === bookId) {
      setOpen(true)
    }
  }, [bookId, paramBookId])

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`)
      return data.book ?? {}
    },
    enabled: open,
  })

  const ratingsLength = book?.ratings?.length ?? 0

  const categoriesFormated =
    book?.categories?.map((x) => x?.category?.name)?.join(', ') ?? ''

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explore?book=${bookId}`, undefined, { shallow: true })
    } else {
      router.push('/explore', undefined, { shallow: true })
    }

    setOpen(open)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    width={171}
                    height={242}
                    alt={book?.name}
                    src={book?.cover_url}
                  />
                  <BookContent>
                    <div>
                      <h2>{book?.name}</h2>
                      <span>{book?.author}</span>
                    </div>

                    <div>
                      <Stars rating={4} size="md" />
                      <p>
                        {ratingsLength}{' '}
                        {ratingsLength === 1 ? 'avaliação' : 'avaliações'}
                      </p>
                    </div>
                  </BookContent>
                </BookDetailsContainer>

                <BookInfos>
                  <div>
                    <BookInfo
                      icon={<BookmarkSimple />}
                      title="Categorias"
                      info={categoriesFormated}
                    />
                    <BookInfo
                      icon={<BookOpen />}
                      title="Páginas"
                      info={String(book.total_pages)}
                    />
                  </div>
                </BookInfos>
              </BookDetailsWrapper>

              <BookRatings bookId={bookId} ratings={book.ratings} />
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
