import { ReactNode } from 'react'

import { Container } from './styles'

type ProfileDetailsItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export function ProfileDetailsItem({
  icon,
  info,
  label,
}: ProfileDetailsItemProps) {
  return (
    <Container>
      {icon}
      <div>
        <strong>{info}</strong>
        <span>{label}</span>
      </div>
    </Container>
  )
}
