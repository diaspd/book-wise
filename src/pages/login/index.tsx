import Image from 'next/image'
import { useRouter } from "next/navigation"

import { Container, Hero, LoginContainer, Button } from "./styles";

import HeroImg from '../../assets/logo.svg'
import GoogleImg from '../../assets/google.svg'
import GithubImg from '../../assets/github.svg'
import RocketImg from '../../assets/rocket.svg'


export default function Login() {
  const router = useRouter()
  
  function handleAccessAsGuest() {
    router.push("/home")
  }

  return (
    <Container>
        <Hero>
          <Image src={HeroImg} width={232} height={58} alt="Book Wise" />
        </Hero>
        <LoginContainer>
          <h1>
            Boas vindas!
          </h1>
          <p>Faça seu login ou acesse como visitante.</p>

          <Button><Image src={GoogleImg} width={32} height={32} alt="" /> <span>Entrar com Google</span></Button>
          <Button><Image src={GithubImg} width={32} height={32} alt="" /><span>Entrar com GitHub</span></Button>
          <Button onClick={handleAccessAsGuest}><Image src={RocketImg} width={32} height={32} alt="Foguete" /><span>Acessar como visitante</span></Button>
        </LoginContainer>
    </Container>
  )
}