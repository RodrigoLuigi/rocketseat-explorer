import { FiArrowLeft, FiClock, FiTrash2} from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Tag } from '../../components/Tag';
import { Stars } from '../../components/Stars';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';

import { Container, Content, MovieNote, MovieInfo, AuthorInfo } from "./styles.js";
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function Details(){
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    navigate(-1)
  }

  async function handleRemoveNote(){
    const confirm = window.confirm("Deseja realmente remover a nota do filme?");

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1);
    } 
  }

  useEffect(() => {
    async function fatchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fatchNote();
  },[])

  return(
    <Container>

      <Header />
      {
      data &&
      <main>
        <Content>
          <ButtonText 
            title="Voltar" 
            icon={FiArrowLeft}
            onClick={handleBack}
          />

          <MovieNote>
            <header>
              <MovieInfo>
                <div>
                  <h2>{data.title}</h2>
                  <Stars ratings={data.rating}/>
                </div>

              <ButtonText 
                title="Excluir Nota" 
                icon={FiTrash2}
                onClick={handleRemoveNote}
              />
              </MovieInfo>


              <AuthorInfo>
                <div>
                  <img src={avatarUrl} alt={avatarUrl}/>

                  <span>Por {user.name}</span>
                </div>

                <div>
                  <FiClock />
                  <span>{data.created_at}</span>
                </div>
              </AuthorInfo>

             { 
              data.tags &&
              <Section>
                  {
                    data.tags.map(tag => (
                      <Tag 
                        key={String(tag.id)}
                        title={tag.name} 
                      />
                    ))
                  }
                </Section>
              }
            </header>

            <p>{data.description}</p>
          </MovieNote>
        </Content>
      </main>
      }
     
    </Container>
  );
}