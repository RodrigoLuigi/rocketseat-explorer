import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';

import { Container, Content, Form } from './styles';

export function NewMovie(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <Link to='/'>
            <FiArrowLeft />
            Voltar
          </Link> 
          
          <Form>
            <h1>Novo Filme</h1>

            <div>
              <Input placeholder="Título"/>
              <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>

            <Textarea placeholder="Obsevações"/>

            <Section title="Marcadores">
              <div className='tags'>
                <NoteItem value="Família" />
                <NoteItem isNew placeholder="Nova tag" />
              </div>
            </Section>

            <div>
              <Button title='Excluir Filme' className='btn-delete' />
              <Button title='Salvar Alterações' />
            </div>

        </Form>

        </Content>
      </main>

    </Container>
  );
}