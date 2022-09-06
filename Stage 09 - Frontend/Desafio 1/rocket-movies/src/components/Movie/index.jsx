import { Stars } from '../Stars';
import { Tag } from '../Tag';

import { Container } from './styles';

export function Movie({data, ...rest}){
  return(
    <Container {...rest}>
      
      <h1>{data.title}</h1>

      <Stars ratings={data.ratings}/>

      <p>{data.text}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>
  );
}