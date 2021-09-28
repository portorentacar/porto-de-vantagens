import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg'
import {FiX} from 'react-icons/fi';
import Modal from 'react-modal'
import{Bars} from './NavbarElements'
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true)
  }

  function handleCloseModal() {
    setIsOpenModal(false)
  }


  Modal.setAppElement('#root');







  return (
    <div className="container">
      <Nav>
        <NavLink to='/'>
          <img src={logoImg} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/regulamento' activeStyle>
          Regulamento
          </NavLink>
          <NavLink to='/onde-usar' activeStyle>
            Onde Usar?
          </NavLink>
          <NavLink to='/parceiros' activeStyle>
            Seja um parceiro
          </NavLink>
          <NavLink to='/contato' activeStyle>
            Fale Conosco
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <Bars handleOpenModal={handleOpenModal}></Bars>
        </NavMenu>
    
      </Nav>




      <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
          <button type="button" className="react-modal-button" onClick={handleCloseModal}>
          <FiX />
          </button>
          <div className="content-modal">
          <Link to='/regulation'>Regulamento</Link>
          <Link to='/companies'>Onde usar?</Link>
          <Link to='/partners'>Seja um parceiro</Link>
          <Link to='/contact'>Fale conosco</Link>
        </div>
        </Modal>
    </div>
  );
};

export default Navbar;
