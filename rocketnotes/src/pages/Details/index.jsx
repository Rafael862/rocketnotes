import "./styles.js";
import { Container } from "./styles.js";

import { Header } from "../../components/header/index.jsx";
import { Button } from "../../components/button";

export function Details(){
  
  return(
    <Container>
    <Header />
    <Button title="Voltar"/>
    </Container>
  )
}