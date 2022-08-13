import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';


export function Header(){

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
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}
