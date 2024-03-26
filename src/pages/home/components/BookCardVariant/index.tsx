import { Container, Book, BookCardImage, BookCard, SeeAllLink } from './styles'

import { Stars } from '@/components/Stars'
import { CaretRight } from 'phosphor-react'

export function BookCardVariant() {
  return (
    <Container>
      <Book>
        <div>
          <span>Sua última leitura</span>
          <SeeAllLink href="">
            Ver todas <CaretRight />{' '}
          </SeeAllLink>
        </div>
        <BookCard>
          <BookCardImage
            src="https://github.com/diaspd.png"
            width={108}
            height={152}
            alt=""
          />
          <main>
            <header>
              <p>Há 2 dias</p>
              <div>{/* <Stars /> */}</div>
            </header>

            <strong>Entendendo Algoritmos</strong>
            <span>Aditya Bhargava</span>
            <p>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius
              leo a in. Amet libero pharetra nunc elementum fringilla velit
              ipsum. Sed vulputat?
            </p>
          </main>
        </BookCard>
      </Book>
    </Container>
  )
}
