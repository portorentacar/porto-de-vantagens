import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './cuponsPageAdmin.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth';
import { useHistory } from 'react-router-dom';
import UserLogin from '../../../components/UserLogin/UserLogin';
import Footer2 from '../../../components/Footer2/Footer2';

function CuponsPageAdmin() {
    const { deleteCupom } = useContext(AuthContext);
    const history = useHistory();
    const [cupons, setCupons] = useState([]);

    useEffect(() => {
        //CARREGANDO OS CUPONS
        async function loadCupons() {
            await firebase.firestore().collection('cupons')
                .get()
                .then((snapshot) => {
                    let list = [];
                    snapshot.forEach((doc) => {

                        const dateFormated = doc.data().date.toDate();
                        const newDateFormated = ((dateFormated.getDate())) + "/" + ((dateFormated.getMonth() + 1)) + "/" + dateFormated.getFullYear();

                        list.push({
                            id: doc.id,
                            name: doc.data().name,
                            contract: doc.data().contract,
                            cpf: doc.data().cpf,
                            date: newDateFormated
                        })
                    })
                    setCupons(list);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        loadCupons();
    }, [])

    function handleDelete(id) {
        deleteCupom(id)
    }

    function handleEdit(id) {
        history.push(`/admin/editcupom/${id}`)
    }



    return (
        <div className="container">
            <Navbar2 />
            <div className="content">
                <div className="dashboard-data">
                    <UserLogin />
                    <div className="data-cupons">
                        <h3>ULTIMOS CUPONS GERADOS</h3>
                        <br />
                        <Link className="btn-header-2" to='/admin/novocupom'>+ Gerar Novo Cupom</Link>
                        <br />
                        {
                            cupons.map((cupom) => {
                                return (
                                    <div className="cupom-data">
                                        <h3>{cupom.name}</h3>
                                        <div className="cupom-infos">
                                            <h5>Contrato: {cupom.contract}</h5>
                                            <h5>CPF: {cupom.cpf}</h5>
                                            <h5>Data: {cupom.date}</h5>
                                        </div>
                                        <h3>Cupom: {cupom.id}</h3>
                                        <div className="buttons-cupom">
                                            <button onClick={() => handleEdit(cupom.id)}>Editar</button>
                                            <button onClick={() => { handleDelete(cupom.id) }}>Excluir</button>
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

export default CuponsPageAdmin;