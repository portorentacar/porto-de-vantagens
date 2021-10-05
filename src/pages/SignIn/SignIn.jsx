import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import './signIn.css'
import LogoImg from '../../assets/images/logo.svg'

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault()

        if(email !== '' && password !== '') {
            signIn(email, password)
        }
    }
    return (
        <div className="container">
        <div className="content">
        <div className="box-sign-in">
            <img src={LogoImg} alt="logo" />
            <h1> FAÇA LOGIN NO SISTEMA</h1>
            <form className="form" onClick={handleLogin}>
                <label>E-MAIL</label>
                <input type="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>SENHA</label>
                <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button>ENTRAR</button>
            </form>
            
        </div>
        </div>
        </div>
    )
}

export default SignIn;