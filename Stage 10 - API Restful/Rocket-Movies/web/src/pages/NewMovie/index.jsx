import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';

import { Container, Content, Form } from './styles';
import { useState } from 'react';

export function NewMovie(){
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

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
                {
                  tags.map((tag, index) => (
                    <NoteItem 
                      key={String(index)}
                      value={tag}
                      onClick={()=>{handleRemoveTag(tag)}}
                    />
                  ))
                }

                <NoteItem 
                  isNew
                  placeholder="Nova tag" 
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />

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