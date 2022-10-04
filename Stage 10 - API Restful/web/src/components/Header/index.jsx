import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './styles';


export function Header(){
  const { signOut } = useAuth();
  
  return(
    <Container>
      <Profile to="/profile">
          <img src="https://github.com/RodrigoLuigi.png" alt="Foto do usuário" />

          <div>
              <span>Bem-vindo</span>
              <strong>Rodrigo Luigi</strong>
          </div>
      </Profile>

      <Logout>
          <RiShutDownLine onClick={signOut}/>
      </Logout>
    </Container>
  )
}
