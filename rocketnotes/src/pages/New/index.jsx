import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';


import { Container, Form } from './styles';

export function New(){
    const [links, setLinks] = useState([]);
    const [newLink, setNewlink] = useState("");

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewlink("");
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>

                    <Section title="Links úteis">
                        {
                            links.map((link, index) =>(
                                <NoteItem 
                                key={String(index)}
                                value={link}
                                onClick={() =>{}}
                                />
                            ))
                        }
                        <NoteItem 
                        isNew 
                        placeholder="Novo link"
                        value={newLink}
                        onChange={e => setNewlink(e.target.value)}
                        onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>

                </Form>
            </main>
        </Container>
    )
}