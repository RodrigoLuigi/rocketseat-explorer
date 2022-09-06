import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'

import { Container, Brand, Search, Profile } from './styles';

export function Header(){
    return(
      <Container>
        <Brand href="#">
          <h1>RocketMovies</h1>
        </Brand>

        <Search>
          <Input type="text" placeholder='Pesquisar pelo título'icon={FiSearch}/>
        </Search>
        
        <Profile> 
          <div>
            <strong>Rodrigo Luigi</strong>
            
            <span>
            <button>sair</button>     
            </span>
          </div>
          
          <a href="#">
          <img src="https://github.com/RodrigoLuigi.png" alt="Foto do usuário" />          
          </a>        
        </Profile>
      </Container>
    );
}