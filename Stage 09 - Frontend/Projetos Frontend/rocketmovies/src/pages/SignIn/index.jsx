import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles';

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Senha"/>

        <Button title="Entrar"/>

        <a href="/register">Criar conta</a>
      </Form>

      <Background />

    </Container>
  );
}