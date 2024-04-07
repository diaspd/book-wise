import { Container } from './styles'

export function ExploreSkeleton() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => {
        return <Container key={i} />
      })}
    </>
  )
}
