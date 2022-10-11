import { Container } from './styles';

export function Button({title, customStyle, loading = false,...rest}){
  return(
    <Container 
      type="button" 
      style={customStyle}
      disabled={loading}
      {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );
}