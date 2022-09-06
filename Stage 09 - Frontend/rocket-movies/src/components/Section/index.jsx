import { Container } from './styles.js';

export function Section({title, children}){
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}