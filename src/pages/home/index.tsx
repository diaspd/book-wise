import Image from "next/image";

import { Container, Sidebar, StartContainer, TrendingContainer, Books, BookCardImage, BookCard, ListBookCard, BookContent, SeeAllLink, LinkContainer, LogoImg,SignInLink, StyledLink, TitleContainer, BookImage, AvatarImage } from "./styles";

import HeroImg from '../../assets/logo.svg'
import GraphImg from '../../assets/graph.svg' 
import { Binoculars, CaretRight, ChartLineUp, SignIn } from "phosphor-react";

import { Stars } from "@/components/Stars";
import { BookCardVariant } from "./components/BookCardVariant";

export default function Home() {
  return (
    <Container>
        <Sidebar>
          <LogoImg href="/home">
            <Image src={HeroImg} width={180} height={40} alt="Book Wise"/>
          </LogoImg>

          <LinkContainer>
            <StyledLink href="/home" title="Start"> 
              <ChartLineUp size={24} />
              Início
            </StyledLink>

            <StyledLink href="/explore" title="Explore"> 
              <Binoculars size={24} />
                Explorar
              </StyledLink>
            </LinkContainer>

              <SignInLink href="/">
                Fazer Login 
                <SignIn size={20} style={{ color: '#50B2C0' }}/> 
              </SignInLink>
        </Sidebar>
        <StartContainer>
          <TitleContainer>
            <Image src={GraphImg} width={32} height={32} alt="" />
            <h1>Início</h1>
          </TitleContainer>

          <BookCardVariant />

          <Books>
              <span>Avaliações mais recentes</span>
              <BookCard>
                  <header>
                    <section>
                        <AvatarImage src="https://github.com/diaspd.png" width={500} height={500} alt="" />
                      <div>
                        <span>Pedro Dias</span>
                        <p>Hoje</p>        
                      </div>      
                    </section>

                    <legend>
                      <Stars />
                    </legend>
                  </header>
                  <div>
                  <BookCardImage src="https://github.com/diaspd.png" width={108} height={152} alt="" />
                  <div>
                    <strong>O Hobbit</strong>
                    <span>J.R.R Tolkien</span>
                    <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequuntur voluptatum esse voluptas molestias sed asperiores magni eligendi? Tempora mollitia repellat hic? Nihil, obcaecati. Corrupti ullam deleniti dolorum libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem cum magni voluptate nisi velit numquam, impedit provident mollitia minus excepturi sit asperiores, distinctio ex eligendi! Eius veritatis quia doloribus? quam.</p> 
                    </div>
                  </div>
              </BookCard>

              <BookCard>
                  <header>
                    <section>
                        <AvatarImage src="https://github.com/diaspd.png" width={500} height={500} alt="" />
                      <div>
                        <span>Pedro Dias</span>
                        <p>Hoje</p>        
                      </div>      
                    </section>

                    <legend>
                      <Stars />
                    </legend>
                  </header>
                  <div>
                  <BookCardImage src="https://github.com/diaspd.png" width={108} height={152} alt="" />
                  <div>
                    <strong>O Hobbit</strong>
                    <span>J.R.R Tolkien</span>
                    <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequuntur voluptatum esse voluptas molestias sed asperiores magni eligendi? Tempora mollitia repellat hic? Nihil, obcaecati. Corrupti ullam deleniti dolorum libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem cum magni voluptate nisi velit numquam, impedit provident mollitia minus excepturi sit asperiores, distinctio ex eligendi! Eius veritatis quia doloribus? quam.</p> 
                    </div>
                  </div>
              </BookCard>

              <BookCard>
                  <header>
                    <section>
                        <AvatarImage src="https://github.com/diaspd.png" width={500} height={500} alt="" />
                      <div>
                        <span>Pedro Dias</span>
                        <p>Hoje</p>        
                      </div>      
                    </section>

                    <legend>
                      <Stars />
                    </legend>
                  </header>
                  <div>
                  <BookCardImage src="https://github.com/diaspd.png" width={108} height={152} alt="" />
                  <div>
                    <strong>O Hobbit</strong>
                    <span>J.R.R Tolkien</span>
                    <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequuntur voluptatum esse voluptas molestias sed asperiores magni eligendi? Tempora mollitia repellat hic? Nihil, obcaecati. Corrupti ullam deleniti dolorum libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem cum magni voluptate nisi velit numquam, impedit provident mollitia minus excepturi sit asperiores, distinctio ex eligendi! Eius veritatis quia doloribus? quam.</p> 
                    </div>
                  </div>
              </BookCard>

          </Books>   
        </StartContainer>

        <TrendingContainer>
          <div>
            <span> Livros populares</span>
            <SeeAllLink href="/explore">
              Ver todos
              <CaretRight />
            </SeeAllLink>
          </div>

          <ListBookCard>
            <BookImage src="https://github.com/diaspd.png" width={64} height={94} alt="" />
              <BookContent>
                <section>
                  <strong>A revolução dos bichos</strong>
                  <span>George Orwell</span>         
                </section>
                <div>
                  <Stars />
                </div>
              </BookContent>
          </ListBookCard>
          <ListBookCard>
            <BookImage src="https://github.com/diaspd.png" width={64} height={94} alt="" />
              <BookContent>
                <section>
                  <strong>A revolução dos bichos</strong>
                  <span>George Orwell</span>         
                </section>
                <div>
                  <Stars />
                </div>
              </BookContent>
          </ListBookCard>
        </TrendingContainer>
    </Container>
  )
}