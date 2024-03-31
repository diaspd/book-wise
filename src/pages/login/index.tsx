import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import GithubImg from '../../assets/icons/github.svg'
import GoogleImg from '../../assets/icons/google.svg'
import RocketImg from '../../assets/icons/rocket.svg'
import HeroImage from '../../assets/logo.svg'
import { Button, Container, Hero, HeroImg, LoginContainer } from './styles'

type AuthButtonProps = {
  callbackUrl?: string
}

export default function Login({ callbackUrl = '/' }: AuthButtonProps) {
  const router = useRouter()
  const handleSignInGithub = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }

    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <Container>
      <Hero>
        <HeroImg src={HeroImage} width={232} height={58} alt="Book Wise" />
      </Hero>
      <LoginContainer>
        <h1>Boas vindas!</h1>
        <p>Faça seu login ou acesse como visitante.</p>

        <Button onClick={() => handleSignInGithub('google')}>
          <Image src={GoogleImg} width={32} height={32} alt="" />{' '}
          <span>Entrar com Google</span>
        </Button>
        <Button onClick={() => handleSignInGithub('github')}>
          <Image src={GithubImg} width={32} height={32} alt="" />
          <span>Entrar com GitHub</span>
        </Button>
        <Button onClick={() => handleSignInGithub()}>
          <Image src={RocketImg} width={32} height={32} alt="Foguete" />
          <span>Acessar como visitante</span>
        </Button>
      </LoginContainer>
    </Container>
  )
}
