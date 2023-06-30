import { Header } from '../../components/header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>
                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>
                </Form>
            </main>
        </Container>
    )
}