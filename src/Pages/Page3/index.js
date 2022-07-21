import {Container} from "./style.js"
import Dog from "../../Assets/dog.svg"
export function Page3() {
  return(
<>
      <Container>
        <div className="BouthArea">
        <div className="Textarea">
          <h1>Title</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in urna, a habitant. Ornare sagittis, blandit blandit erat at sed. Diam consectetur sit condimentum metus, suspendisse elementum diam semper proin. Sem volutpat suspendisse pretium dis non laoreet diam eget. Vestibulum nisi morbi faucibus pellentesque.</p>
        </div>
        <div className="img">
          <img className="Dogimage"src={Dog} alt="Imagem Dog"/>
          </div>
          </div>
</Container>

</>

  )
}