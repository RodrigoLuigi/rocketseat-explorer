import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';
import { useState } from 'react';

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    console.log(`Name: ${name} E-mail:${email} Password: ${password}`)
    if(!name || !email || !password ){
      return toast.warn("Preencha todos os campos!", {theme: "colored"});
    }

    api.post("/users", {name, email, password})
    .then(() => {
      toast.success("Usuário cadastrado com sucesso!", {theme: "colored"});
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        toast.error(error.response.data.message, {theme: "colored"});
      } else {
        toast.error("Não foi possível cadastrar", {theme: "colored"});
      }
    })

  }

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
        onChange={e => setName(e.target.value)}
        />

        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Cadastrar" 
          onClick={handleSignUp}
        />

        <Link to="/">Voltar para o login</Link>

      </Form>
    </Container>
  );
}