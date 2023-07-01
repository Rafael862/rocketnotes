import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/rafael862.png" 
                     alt="Foto do usuário" 
                />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Rafael Ferreira</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}