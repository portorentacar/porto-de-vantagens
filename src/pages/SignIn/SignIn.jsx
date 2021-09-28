import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../contexts/Auth';
import Navbar from '../../components/Navbar/index'
import './signIn.css'

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
            <Navbar />
        <div className="content">
        <div className="box">
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
        <Footer />
        </div>
    )
}

export default SignIn;