import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

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
              <BookImage width={171} height={242} alt="" src="" />
              <BookContent>
                <div>
                  <h2>O Hobbit</h2>
                  <span color="gray-300">Tolkien</span>
                </div>

                <div>
                  {/* <Stars rating={book.avgRating} size="md" /> */}
                  <span color="gray-400">3 avaliações</span>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos></BookInfos>
          </BookDetailsWrapper>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
