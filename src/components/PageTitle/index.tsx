import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'

import { Container } from './styles'

type PageTitleProps = ComponentProps<typeof Container> & {
  icon: ReactNode
  title: string
}

export function PageTitle({ title, icon, ...props }: PageTitleProps) {
  return (
    <Container {...props}>
      {icon}
      <h1>{title}</h1>
    </Container>
  )
}
