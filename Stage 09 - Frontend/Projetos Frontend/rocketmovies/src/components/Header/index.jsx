import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'

import { Container, Brand, Search, Profile } from './styles';

export function Header(){
    return(
      <Container>
        <Brand to="/">
          <h1>RocketMovies</h1>
        </Brand>

        <Search>
          <Input type="text" placeholder='Pesquisar pelo título'icon={FiSearch}/>
        </Search>
        
        <Profile> 
          <div>
            <strong>Rodrigo Luigi</strong>
            
            <div>
            <button>sair</button>     
            </div>
          </div>
          
          <Link to="/profile">
            <img src="https://github.com/RodrigoLuigi.png" alt="Foto do usuário" />          
          </Link>        
        </Profile>
      </Container>
    );
}