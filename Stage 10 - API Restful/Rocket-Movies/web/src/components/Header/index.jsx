import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../../components/Input';

import { Container, Profile, Search } from './styles';

export function Header(){
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  return(
    <Container>
      <span>RocketMovies</span>
      
      <Search>
        <Input placeholder="Digite aqui"icon={FiSearch}/>
      </Search>

      <Profile>
        <div>
          <strong>{user.name}</strong>

          <div>
          <button
          type='button'
          onClick={signOut}
          >
            sair
          </button>
          </div>
        </div>

        <Link to='/profile'>
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
      
    </Container>
  );
}