import React from 'react';
import {Link} from 'react-router-dom';
import './topBar.css';


function TopBar() {
    return (
        <div className="top-bar">
                <Link to="/Admin/painel">Painel</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/parceiros">Parceiros</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/novo-parceiro">Cadastrar novo parceiro</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/cupons">Cupons</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/novo-cupom">Cadastrar novo cupom</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/usuarios">Usuários</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/entrar">Cadastrar novo usuário</Link>
        </div>
    )
}

export default TopBar;