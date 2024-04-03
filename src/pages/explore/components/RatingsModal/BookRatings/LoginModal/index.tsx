import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { AuthButtons } from '@/components/AuthButtons'

import { DialogClose, DialogContent, DialogOverlay } from './styles'

type LoginDialogProps = {
  children: ReactNode
}

export function LoginModal({ children }: LoginDialogProps) {
  const router = useRouter()
  const paramBookId = router.query.book as string

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <div>
            <span>Faça login para deixar sua avaliação</span>
            <div style={{ paddingTop: '40px' }}>
              <AuthButtons
                callbackUrl={
                  paramBookId ? `/explore?book=${paramBookId}` : '/explore'
                }
              />
            </div>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
