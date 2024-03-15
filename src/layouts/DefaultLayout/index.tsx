import { Container, Content } from './styles'
import { ReactNode } from 'react'
import Head from 'next/head'
import { Sidebar } from '@/components/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | Book Wise`}</title>
      </Head>

      <Sidebar />

      <Content>{children}</Content>
    </Container>
  )
}
