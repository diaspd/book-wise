import Image from 'next/image'

import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import HeroImg from '../../assets/logo.svg'

import { Container, Content, LinkContainer, LogoImg, Sidebar, SignInLink, StyledLink, UserDetails } from './styles'
import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  const router = useRouter()

  const { data: session } = useSession();

  return (
    <Container >
      <Head>
        <title>{`${title} | Book Wise`}</title>
      </Head>
    <Sidebar>
      <header>
    <LogoImg href="/">
      <Image src={HeroImg} width={180} height={40} alt="Book Wise"/>
    </LogoImg>

    <LinkContainer>
      <StyledLink href="/" title="Start" active={router.asPath === '/'}> 
        <ChartLineUp size={24} />
        Início
      </StyledLink>

      <StyledLink href="/explore" title="Explore" active={router.asPath === '/explore'}> 
        <Binoculars size={24} />
          Explorar
      </StyledLink>

        {
          session && (
            <StyledLink href={`/profile/${session.user.id}`} >
              <User size={24} /> 
              Perfil
            </StyledLink>
          )
        }
      </LinkContainer>

      </header>

      {
          !session ? (     
            <SignInLink href="/login">
              Fazer Login 
            <SignIn size={20} style={{ color: '#50B2C0' }}/> 
            </SignInLink>
          ) : (
            <UserDetails onClick={() => signOut()}>
              <p>{session.user?.name}</p>
              <SignOut color="#f75a68"/>
            </UserDetails>
          )
      }
  </Sidebar>

  <Content>
    {children}
  </Content>
  </Container>
  )
}