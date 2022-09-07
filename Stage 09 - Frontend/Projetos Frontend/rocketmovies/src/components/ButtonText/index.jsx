import {FiArrowLeft} from 'react-icons/fi'

import { Container } from './styles';

export function ButtonText({ title , ...rest}){
  return(
    <Container type="button" {...rest}>
      <FiArrowLeft />
      {title}
    </Container>
  );
}