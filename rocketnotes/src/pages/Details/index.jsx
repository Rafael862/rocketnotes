import "./styles.js";
import { Container, Links, Content } from "./styles.js";


import { Header } from "../../components/header/index.jsx";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){
  
  return(
    <Container>
    <Header />

    <main>
      <Content>
    <ButtonText title="Excluir nota" />
    <h1>Introdução ao React</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate, voluptate incidunt quos fugiat nemo repudiandae beatae numquam quia. Expedita natus facilis explicabo? Nesciunt blanditiis odio tempore a doloremque possimus.</p>
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
    </Content>
    </main>
    </Container>
  )
}