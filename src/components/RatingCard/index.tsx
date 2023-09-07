import { Avatar } from "../Avatar";
import { Stars } from "../Stars";
import { BookCard, BookCardImage, Description } from "./styles";

export function Ratingcard() {
  return (
    <BookCard>
    <header>
      <section>
          <Avatar src="https://github.com/diaspd.png" alt="" size="md"/>
        <div>
          <span>Pedro Dias</span>
          <p>Hoje</p>        
        </div>      
      </section>

      <legend>
        <Stars />
      </legend>
    </header>
    <Description>
    <BookCardImage src="https://github.com/diaspd.png" width={108} height={152} alt="" />
    <div>
      <strong>O Hobbit</strong>
      <span>J.R.R Tolkien</span>
      <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequuntur voluptatum esse voluptas molestias sed asperiores magni eligendi? Tempora mollitia repellat hic? Nihil, obcaecati. Corrupti ullam deleniti dolorum libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem cum magni voluptate nisi velit numquam, impedit provident mollitia minus excepturi sit asperiores, distinctio ex eligendi! Eius veritatis quia doloribus? quam.</p> 
      </div>
    </Description>
</BookCard>
  )
}