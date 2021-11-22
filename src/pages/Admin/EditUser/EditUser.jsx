import React, { useEffect, useState } from 'react';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './editUser.css'
import firebase from '../../../services/firebaseConnection';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import UserLogin from '../../../components/UserLogin/UserLogin';
import Footer2 from '../../../components/Footer2/Footer2';

function EditUser() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        async function loadUser() {
            await firebase.firestore().collection('users').doc(id)
                .get()
                .then((snapshot) => {
                    console.log(snapshot)
                    setName(snapshot.data().name);
                    setEmail(snapshot.data().email);
                    setPassword(snapshot.data().password)
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }
        loadUser()
    }, [id])


    async function handleEditUser(e) {
        e.preventDefault();

        await firebase.firestore().collection('users')
            .doc(id).update({
                name: name,
                email: email,
                password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                toast.success('Usuário editado com sucesso!');
            }).catch(error => {
                console.log(error)
                toast.error('Ops. Deu algo errado');
            })

    }

    return (
        <div className="container">
            <Navbar2 />
            <div className="content">
                <UserLogin />
                <div className="EditUser">
                    <h1> CADASTRO DE USUÁRIO</h1>
                    <form className="form">
                        <label>NOME</label>
                        <input type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <label>E-MAIL</label>
                        <input type="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>SENHA</label>
                        <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit" onClick={() => handleEditUser}>ATUALIZAR CADASTRO</button>
                    </form>

                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default EditUser;