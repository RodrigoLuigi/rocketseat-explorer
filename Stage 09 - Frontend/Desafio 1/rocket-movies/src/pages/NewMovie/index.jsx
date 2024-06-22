import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';

import { Container, Content, Form } from './styles';

export function NewMovie(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();
  
  function handleBack() {
    navigate(-1)
  }
  
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }


  async function handleNewNote() {
    if(!title) {
      return toast.warn("Digite o título da nota", {theme: "colored"});
    }

    if(rating == 0) {
      return toast.warn("Dê uma nota para o Filme.", {theme: "colored"});
    }

    if(!tags[0]) {
    return toast.warn("Adicione uma tag no campo de marcadores.", {theme: "colored"});
    }

    if(newTag) {
    return toast.warn("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.", {theme: "colored"});
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    toast.success("Nota criada com sucesso!", {theme: "colored"});
    navigate(-1);
  }

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText 
            title="Voltar" 
            icon={FiArrowLeft} 
            onClick={handleBack} 
          />
          
          <Form>
            <h1>Novo Filme</h1>

            <div>
              <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />

              <Input 
                placeholder="Sua nota (de 0 a 5)"
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <Textarea 
              placeholder="Obsevações"
              onChange={e => setDescription(e.target.value)}
            />

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
             {/*  <Button title='Excluir Filme' className='btn-delete' /> */}

              <Button 
                title='Salvar Alterações' 
                onClick={handleNewNote}
              />
            </div>

        </Form>

        </Content>
      </main>

    </Container>
  );
}