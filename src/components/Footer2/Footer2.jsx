import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';
import logo2Img from '../../assets/images/logo2.svg';
import codingit from '../../assets/images/codingit.svg';
import './footer2.css'

function Footer2() {
    return (
        <div className="container">

            <div className="footer">
                <div className="infos">
                    <div className="footer-1">
                        <a href="/">  <img src={logo2Img} alt="logo" /></a>
                        <p>MAIS BENEFÍCIOS PARA NOSSOS CLIENTES</p>
                    </div>
                    <div className="footer-2">
                        <h4>NAVEGAÇÃO</h4>
                        <Link to='/admin/painel'>PAINEL</Link>
                        <Link to='/admin/parceiros'>PARCEIROS</Link>
                        <Link to='/admin/novoparceiro'>NOVOS PARCEIROS</Link>
                        <Link to='/admin/cupons'>CUPONS</Link>
                        <Link to='/admin/novocupom'>NOVOS CUPOM</Link>
                    </div>
                    <div className="footer-2">
                        <h4>NAVEGAÇÃO</h4>
                        <Link to='/admin/usuarios'>USUÁRIOS</Link>
                        <Link to='/admin/cadastro'>NOVOS USUÁRIOS</Link>
                        <a href='https://portorentacar.com.br/' target="_blank" rel="noopener noreferrer">PORTO RENT A CAR</a>
                        <a href="https://codingit.com.br/" target="_blank" rel="noopener noreferrer">CODING IT</a>

                    </div>
                    <div className="footer-4">
                        <h4>FALE COM A CODING IT</h4>
                        <p>< FiPhoneCall /> 21 99742-9585</p>
                        <p>< FiMail /> jefersonmacedowgf@gmail.com</p>
                        <p>< FiMapPin /> Rua Marcionílio Freire Azevedo, 953</p>
                        <p className="line">Serra do Sambê, Rio Bonito – RJ</p>
                    </div>
                </div>
                <div className="copy">
                    <p>CLUBE DE VANTAGENS - PORTO RENT A CAR © 2021. TODOS OS DIREITOS RESERVADOS</p>
                    <div className="img">
                        <p>FEITO POR:</p>
                        <a href="https://codingit.com.br/" target="_blank" rel="noopener noreferrer">
                            <img src={codingit} alt="codingit" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer2;