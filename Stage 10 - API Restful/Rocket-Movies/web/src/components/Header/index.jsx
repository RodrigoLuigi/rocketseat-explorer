import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';

import { Container, Profile, Search } from './styles';

export function Header(){
  const { signOut } = useAuth();


  return(
    <Container>
      <span>RocketMovies</span>
      
      <Search>
        <Input placeholder="Digite aqui"icon={FiSearch}/>
      </Search>

      <Profile>
        <div>
          <strong>Rodrigo Luigi</strong>

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
          <img src="https://github.com/RodrigoLuigi.png" alt="Foto do usuário" />
        </Link>
      </Profile>
      
    </Container>
  );
}