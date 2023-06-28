import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile } from './styles';

export function Header({children}){
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate();

  function handleSignOut(){
    navigate("/");
    signOut();
  }
  return(
    <Container>

      <div className="content">

      <span>RocketMovies</span>
      
      <div className='search'>
       {children}
      </div>

      <Profile>
        <div>
          <strong>{user.name}</strong>

          <div>
          <button
          type='button'
          onClick={handleSignOut}
          >
            sair
          </button>
          </div>
        </div>

        <Link to='/profile'>
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
      </div>
      
    </Container>
  );
}