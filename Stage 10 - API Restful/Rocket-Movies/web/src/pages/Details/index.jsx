import { FiArrowLeft, FiClock} from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


import { Tag } from '../../components/Tag';
import { Stars } from '../../components/Stars';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';

import { Container, Content, MovieNote, MovieInfo, AuthorInfo } from "./styles.js";
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function Details(){
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


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
          <Link to='/'>
            <FiArrowLeft />
            Voltar
          </Link> 

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
            </header>

            <p>{data.description}</p>
          </MovieNote>
        </Content>
      </main>
      }
     
    </Container>
  );
}