import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Container, Hero, LoginContainer, Button, HeroImg } from './styles'

import HeroImage from '../../assets/logo.svg'
import GoogleImg from '../../assets/google.svg'
import GithubImg from '../../assets/github.svg'
import RocketImg from '../../assets/rocket.svg'
import { signIn } from 'next-auth/react'

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
