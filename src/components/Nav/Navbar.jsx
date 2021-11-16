import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logoImg from '../../assets/images/logo.svg'

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
   font-family: "Montserrat", sans-serif;
  z-index: 98;
  position: relative;
  background-color: #fff;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logoImg} alt='logo' />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
