import { FiArrowLeft, FiClock, FiTrash2} from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify';

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

  function handleRemoveNote(){
    confirmAlert({
      message: 'Deseja realmente remover a nota do filme?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            await api.delete(`/notes/${params.id}`)
            navigate(-1);

            toast.success('Nota excluída com sucesso!', {
              theme: "colored"
            })
          }
        },
        {
          label: 'Não',
          onClick: () => {}
        }
      ]
    });
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
      <main>
        <Content>
          <ButtonText 
            title="Voltar" 
            icon={FiArrowLeft}
            onClick={handleBack}
            />

          {
          data &&
          <MovieNote>
            <header>
              <MovieInfo>
                  <h2>{data.title}</h2>
                  <Stars ratings={data.rating}/>

              
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

            <ButtonText 
                title="Excluir Nota" 
                icon={FiTrash2}
                onClick={handleRemoveNote}
              />
          </MovieNote>
        }
        </Content>
      </main>
     
    </Container>
  );
}