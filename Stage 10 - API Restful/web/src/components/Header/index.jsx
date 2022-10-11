import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, Profile, Logout } from './styles';


export function Header(){
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  
  return(
    <Container>
      <Profile to="/profile">
          <img src={avatarUrl} alt={`Foto do usuário ${user.name}`} />

          <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
          </div>
      </Profile>

      <Logout type="button" onClick={handleSignOut}>
          <RiShutDownLine />
      </Logout>
    </Container>
  )
}
