import { Container } from './styles';

export function Input({ icon: icon, ...rest}){
  return(
    <Container>
      {icon && <Icon size={20} />}
      <input {...rest}/>
    </Container>
  );
}