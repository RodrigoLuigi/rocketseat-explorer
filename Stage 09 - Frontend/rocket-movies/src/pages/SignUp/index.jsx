import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp(){
  return(
    <Container>
      <Background />


      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar filmes e séries.</p>

        <h2>Crie sua conta</h2>

        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />
        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        />
        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}
        />

        <Button title="Cadastrar" />

        <a href="/">Voltar para o login</a>

      </Form>
    </Container>
  );
}