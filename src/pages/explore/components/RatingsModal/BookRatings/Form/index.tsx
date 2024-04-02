import { Check, X } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'

import { Avatar } from '@/components/Avatar'
import { Stars } from '@/components/Stars'

import {
  ActionsContainer,
  Container,
  FormContainer,
  UserDetails,
} from './styles'

type FormProps = {
  onCancel: () => void
  bookId: string
}

export function Form({ bookId, onCancel }: FormProps) {
  const { data: session } = useSession()

  const user = session?.user

  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const submitDisabled = !description.trim() || !currentRate

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (submitDisabled) {
      console.log('')
    }
  }

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <h2>{user.name}</h2>
          </section>

          <Stars size="lg" rating={currentRate} setRating={setCurrentRate} />
        </UserDetails>
      )}

      <FormContainer onSubmit={handleSubmit}>
        <textarea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <button onClick={onCancel}>
            <X />
          </button>

          <button disabled={submitDisabled}>
            <Check />
          </button>
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
