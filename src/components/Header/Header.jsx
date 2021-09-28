import {Link} from 'react-router-dom'
import React from 'react'
import imgHeader from '../../assets/images/imgHeader.png';
import imgParticipe from '../../assets/images/participe.svg';
import './header.css'

function Header() {

    return (
        <div className="container">
        <div className="content">
        <div className="header">
            <div className="header-img">
            <img src={imgHeader} alt="header" />
            </div>
            <div className="text">
            <img src={imgParticipe} alt="header" />
            <h3>ALUGUE UM VEÍCULO CONOSCO E TENHA DESCONTOS EM LOJAS, RESTAURANTES, HOTEIS E MAIS...</h3>
                <div className="buttons">
                    <Link className="btn-header"  to="/buscar-cupom">VER MEUS CUPONS</Link>
                    <Link className="btn-header-2" to='/validar-cupom'>VALIDAR CUPOM</Link>
                   <Link  to='/regulamento'>VER REGULAMENTO COMPLETO</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Header;