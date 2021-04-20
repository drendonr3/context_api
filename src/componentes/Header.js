import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return ( 
        <ContenedorHeader>
          <Titulo>Mi Blog Personal</Titulo>
          <Menu>
            <NavLink to="/" exact={true}>Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acercade">Acerca De</NavLink>
          </Menu>
        </ContenedorHeader>
     );
}

const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  text-transform:uppercase;
  margin-bottom: 10px;
  font-size:26px;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    color:#165168;
    margin:0 10px;
  }

  a:hover{
    color:#191668;
  }

  a.active {
    padding-bottom:3px;
    border-bottom: 2px solid #165158;
    
  }
`;

export default Header;