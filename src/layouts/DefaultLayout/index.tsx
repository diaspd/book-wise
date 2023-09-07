import Image from 'next/image'

import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import HeroImg from '../../assets/logo.svg'

import { Container, Content, LinkContainer, LogoImg, Sidebar, SignInLink, StyledLink, UserDetails } from './styles'
import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { Avatar } from '@/components/Avatar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  const router = useRouter()

  const { data: session } = useSession();

  const handleOpenProfile = () => {
    router.push(`/profile/${session?.user.id}`)
  }

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
      <StyledLink href="/" title="Start" active> 
        <ChartLineUp size={24} />
        <span>Início</span>  
      </StyledLink>

      <StyledLink href="/explore" title="Explore" active={router.asPath === '/explore'}> 
        <Binoculars size={24} />
        <span> Explorar </span>
      </StyledLink>

        {
          session && (
            <StyledLink href={`/profile/${session?.user.id}`} >
              <User size={24} /> 
              <span>Perfil</span>
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
              <Avatar 
                size="sm" 
                src={session?.user?.avatar_url} 
                alt={session?.user?.name} 
                onClick={handleOpenProfile} 
                style={{ cursor: 'pointer' }} 
              />
              <p>{session?.user?.name}</p>
              <SignOut color="#f75a68" style={{ cursor: 'pointer'}} />
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