import Head from 'next/head'
import { ReactNode } from 'react'

import { Sidebar } from '@/components/Sidebar'

import { Container, Content } from './styles'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export function DefaultLayout({ children, title }: DefaultLayoutProps) {
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
