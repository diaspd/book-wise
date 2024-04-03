import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { AuthButton, Container } from './styles'

type AuthButtonsProps = {
  canGuest?: boolean
  callbackUrl?: string
}

export function AuthButtons({ canGuest, callbackUrl = '/' }: AuthButtonsProps) {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push('/')
      return
    }

    signIn(provider, {
      callbackUrl,
    })
  }
  return (
    <Container>
      <AuthButton onClick={() => handleSignIn('google')}>
        <Image
          width={32}
          height={32}
          src="/images/icons/google.svg"
          alt="Google Logo"
        />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn('github')}>
        <Image
          width={32}
          height={32}
          src="/images/icons/github.svg"
          alt="Github Logo"
        />
        Entrar com Github
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <Image
            width={32}
            height={32}
            src="/images/icons/rocket.svg"
            alt="Rocket Icon"
          />
          Acessar como visitante
        </AuthButton>
      )}
    </Container>
  )
}
