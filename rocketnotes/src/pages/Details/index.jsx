import "./styles.js";
import { Container } from "./styles.js";
import { Button } from "../../components/button";

export function Details(){
  
  return(
    <Container>
    <h1>Hello World!</h1>
    <span>Rafael Ferreira</span>
    <Button title="Entrar"/>
    <Button title="Cadastrar"/>
    <Button title="Voltar"/>
    </Container>
  )
}