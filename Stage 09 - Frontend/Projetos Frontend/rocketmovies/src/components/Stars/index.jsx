import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

import { Container } from './styles';

export function Stars({ratings}){
  let stars = [];
  
  for(let i=0; i < 5; i++){
    const star = i < ratings ? IoIosStar : IoIosStarOutline;
    stars = [...stars , star];
  }

  return(
    <Container>
      {stars.map((Star, index) => <Star key={index}/>)}
    </Container>
  );
}