import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';

const NavbarAdmin = () => {
  return (
    <div className="container">
      <Nav>
        <NavLink to='/'>
          <img src={logoImg} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/admin/painel' activeStyle>
          Painel
          </NavLink>
          <NavLink to='/admin/parceiros' activeStyle>
            Parceiros
          </NavLink>
          <NavLink to='/admin/cupons' activeStyle>
            Cupons
          </NavLink>
          <NavLink to='/admin/usuarios' activeStyle>
            Usuários
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavbarAdmin;


    