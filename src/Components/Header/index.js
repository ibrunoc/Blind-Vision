import { Container, Main } from "./style";
import Logo from "../../Assets/BlindVision2.svg";
export function Header() {
  return (
    <Main>
      <Container>
        <div className="Logo">
          <img src={Logo} alt=".." />
        </div>
        <div className="Content">
          <div>
            <h3>Home</h3>
            <span></span>
          </div>
          <div>
            {" "}
            <h3>Informações </h3>
            <span></span>
          </div>
        </div>
        <div className="Btn">
          <span>Botao</span>
        </div>
      </Container>
    </Main>
  );
}
