import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch, FiFileText } from 'react-icons/fi';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Input } from '../../components/Input';

import { Container, Content,MovieNotes, NewMovie, Search, EmptyNote } from './styles';

export function Home(){
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  },[search]); 


  return(
  <Container>
    <Header>
      <Search>
          <Input 
          placeholder="Digite aqui"
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>
    </Header>

    <main>
      <Content>
        <header>
          <h1>Meus Filmes</h1>

          <NewMovie to="/new">
            <FiPlus />
            <span>Adicionar filme</span>
          </NewMovie>
        </header>
        
          <MovieNotes>
            { notes.length > 0 ? 
              ( 
                notes.map(note => (
                  <Movie 
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                  />
                ))
              ) : 
              <EmptyNote>
                <FiFileText size={84}/>
                <h3>Nenhum filme cadastrado no momento.<br /> Clique em Adicionar filme.</h3>
              </EmptyNote>
            }
          </MovieNotes>
      </Content>
    </main>

  </Container>
  );
}