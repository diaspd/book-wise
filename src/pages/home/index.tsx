import { useSession } from "next-auth/react";
import Image from 'next/image';

import { Container, StartContainer, TrendingContainer, Books, BookCardImage, BookCard, ListBookCard, BookContent, SeeAllLink, TitleContainer, BookImage, AvatarImage } from "./styles";

import GraphImg from '../../assets/graph.svg' 
import { CaretRight } from "phosphor-react";

import { Stars } from "@/components/Stars";
import { BookCardVariant } from "./components/BookCardVariant";
import { NextPageWithLayout } from "../_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Avatar } from "@/components/Avatar";

const HomePage: NextPageWithLayout = () => {
  return (
    <Container> 
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
                        <Avatar src="https://github.com/diaspd.png" alt="" />
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

HomePage.getLayout = (page) => {
  return(
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
} 

export default HomePage;