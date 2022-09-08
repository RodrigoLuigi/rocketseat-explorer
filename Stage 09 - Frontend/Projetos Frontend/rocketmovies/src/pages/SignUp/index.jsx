import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles';

export function SignUp(){
  return(
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome"/>
        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Senha"/>

        <Button title="Cadastrar"/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
    </Container>
  );
}