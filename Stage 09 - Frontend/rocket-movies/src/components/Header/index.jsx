import { FiSearch } from 'react-icons/fi'

import { Input } from '../../components/Input';

import { Container, Profile, Search } from './styles';

export function Header(){
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
          <button>sair</button>
          </div>
        </div>

        <img src="https://github.com/RodrigoLuigi.png" alt="Foto do usuário" />
      </Profile>
      
    </Container>
  );
}