import "./styles.js";
import { Container, Links } from "./styles.js";


import { Header } from "../../components/header/index.jsx";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){
  
  return(
    <Container>
    <Header />

    <ButtonText title="Excluir nota" />
    <Section title="Links úteis">
    <Links>
      <li><a href="#">http://www.rocketseat.com.br/</a></li>
      <li><a href="#">http://www.rocketseat.com.br/</a></li>
    </Links>
    </Section>

    <Section title="Marcadores">
    <Tag title="express"/>
    <Tag title="nodejs"/>
    </Section>

    <Button title="Voltar"/>
    </Container>
  )
}