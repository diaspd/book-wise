import { Container } from './styles'

export function HomeSkeleton() {
  return (
    <Container>
      <span />
      {Array.from({ length: 10 }).map((_, i) => {
        return <div key={i} />
      })}
    </Container>
  )
}
