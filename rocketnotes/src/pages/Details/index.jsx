import "./styles.js";
import { Container, Links } from "./styles.js";


import { Header } from "../../components/header/index.jsx";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";

export function Details(){
  
  return(
    <Container>
    <Header />
    <Section title="Links úteis">
    <Links>
      <li><a href="#">http://www.rocketseat.com.br/</a></li>
      <li><a href="#">http://www.rocketseat.com.br/</a></li>
    </Links>
    </Section>
    <Button title="Voltar"/>
    </Container>
  )
}