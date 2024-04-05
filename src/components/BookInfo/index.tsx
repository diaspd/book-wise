import { ReactNode } from 'react'

import { Container } from './styles'

type BookInfoProps = {
  icon: ReactNode
  title: string
  info: string
}

export function BookInfo({ icon, title, info }: BookInfoProps) {
  return (
    <Container>
      {icon}
      <div>
        <span>{title}</span>
        <p>{info}</p>
      </div>
    </Container>
  )
}
