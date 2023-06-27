import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/button';

import { Container, Form } from "./styles";

export function Signin(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail} />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock} />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail} />

                <Button title="Entrar"/>

                <a href="#">
                    Criar conta
                </a>
            </Form>
        </Container>
    )
}