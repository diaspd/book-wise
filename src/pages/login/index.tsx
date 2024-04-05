import Head from 'next/head'

import { AuthButtons } from '@/components/AuthButtons'
import { Container, Hero, HeroImg, LoginContainer } from '@/styles/pages/login'

import HeroImage from '../../assets/logo.svg'

export default function Login() {
  return (
    <Container>
      <Head>
        <title>Login | BookWise</title>
      </Head>
      <Hero>
        <HeroImg src={HeroImage} width={232} height={58} alt="Book Wise" />
      </Hero>
      <LoginContainer>
        <h1>Boas vindas!</h1>
        <p>Faça seu login ou acesse como visitante.</p>

        <AuthButtons canGuest />
      </LoginContainer>
    </Container>
  )
}
