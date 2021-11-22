import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './userAdmin.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth';
import { useHistory } from 'react-router-dom';
import UserLogin from '../../../components/UserLogin/UserLogin';
import Footer2 from '../../../components/Footer2/Footer2';

function UsersAdmin() {
    const history = useHistory();
    const { userDelete } = useContext(AuthContext)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //CARREGANDO OS CUPONS
        async function loadCupons() {
            await firebase.firestore().collection('users')
                .get()
                .then((snapshot) => {
                    let list = [];


                    snapshot.forEach((doc) => {
                        list.push({
                            id: doc.id,
                            name: doc.data().name,
                            email: doc.data().email,
                        })
                    })
                    setUsers(list);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        loadCupons();
    }, [])


    function handleDelete(id) {
        userDelete(id)
    }

    function handleEdit(id) {
        history.push(`/admin/usuarios/${id}`)
    }


    return (
        <div className="container">
            <Navbar2 />
            <div className="content">
                <div className="dashboard-data">
                    <UserLogin />
                    <div className="data-cupons">
                        <h3>USUÁRIOS CADASTRADOS</h3>
                        <br />
                        <Link className="btn-header-2" to='/admin/cadastro'>+ Cadastrar Novo Usuário</Link>
                        <br />
                        {
                            users.map((user) => {
                                return (
                                    <div className="cupom-data">
                                        <h3>{user.name}</h3>
                                        <h3>{user.email}</h3>
                                        <div className="buttons">
                                            <button onClick={() => handleEdit(user.id)}>Editar</button>
                                            <button onClick={() => handleDelete(user.id)}>Excluir</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default UsersAdmin;