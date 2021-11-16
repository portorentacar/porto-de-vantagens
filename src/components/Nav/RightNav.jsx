import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    a{
      text-decoration: none;
      color: #2e4562;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      a{
      text-decoration: none;
      color: #fff;
    }
    }

  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li> <a href="/regulamento"><b>Regulamento</b></a> </li>
      <li> <a href="/onde-usar"><b>Onde usar</b></a> </li>
      <li> <a href="/parceiros"><b>Parceiros</b></a> </li>
      <li> <a href="/turismo"><b>Turismo</b></a> </li>
      <li> <a href="/contato"><b>Fale conosco</b></a> </li>
    </Ul>
  )
}

export default RightNav
