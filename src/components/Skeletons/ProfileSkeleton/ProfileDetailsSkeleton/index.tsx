import { Container } from './styles'

export function ProfileDetailsSkeleton() {
  return (
    <Container>
      <div />

      <section />

      <span />

      {Array.from({ length: 4 }).map((_, i) => {
        return <main key={i} />
      })}
    </Container>
  )
}
