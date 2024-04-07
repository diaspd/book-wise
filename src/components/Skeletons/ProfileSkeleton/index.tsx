import { Container } from './styles'

export function ProfileSkeleton() {
  return (
    <Container>
      <section />

      <div />

      <span />

      {Array.from({ length: 10 }).map((_, i) => {
        return <main key={i} />
      })}
    </Container>
  )
}
