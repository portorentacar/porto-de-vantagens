import React, { useContext, useState } from 'react';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './signUp.css'
import { AuthContext } from '../../../contexts/Auth';
import UserLogin from '../../../components/UserLogin/UserLogin';
import Footer2 from '../../../components/Footer2/Footer2';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { signUp } = useContext(AuthContext);


    function handleSignUp(e) {
        e.preventDefault()

        if (name !== '' && email !== '' && password !== '') {
            signUp(email, password, name);
            setName('');
            setEmail('');
            setPassword('');
        }
    }

    return (
        <div className="container">
            <Navbar2 />
            <div className="content">
                <UserLogin />
                <div className="box">
                    <h1> CADASTRO DE USUÁRIO</h1>
                    <form className="form" onClick={handleSignUp}>
                        <label>NOME</label>
                        <input type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <label>E-MAIL</label>
                        <input type="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>SENHA</label>
                        <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit">CRIAR CADASTRO</button>
                    </form>

                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default SignUp;