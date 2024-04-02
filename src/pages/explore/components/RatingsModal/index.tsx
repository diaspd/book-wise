import { BookmarkSimple, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen } from 'phosphor-react'
import { ReactNode } from 'react'

import { Stars } from '@/components/Stars'

import { BookInfo } from './BookInfo'
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

type RatingsModalProps = {
  children: ReactNode
}

export function RatingsModal({ children }: RatingsModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                width={171}
                height={242}
                alt=""
                src="https://github.com/diaspd.png"
              />
              <BookContent>
                <div>
                  <h2>O Hobbit</h2>
                  <span>Tolkien</span>
                </div>

                <div>
                  <Stars rating={4} size="md" />
                  <p>3 avaliações</p>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos>
              <BookInfo
                icon={<BookmarkSimple />}
                title="Categorias"
                info="Ficção, Ação"
              />
              <BookInfo icon={<BookOpen />} title="Páginas" info="350" />
            </BookInfos>
          </BookDetailsWrapper>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
