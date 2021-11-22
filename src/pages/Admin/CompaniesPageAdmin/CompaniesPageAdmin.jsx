import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './companiesPageAdmin.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth';
import { useHistory } from 'react-router-dom';
import UserLogin from '../../../components/UserLogin/UserLogin';
import Footer from '../../../components/Footer/Footer';

function CompanyPageAdmin() {
    const history = useHistory();
    const { deleteCompany } = useContext(AuthContext)
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadCompanies() {
            await firebase.firestore().collection('company')
                .get()
                .then((snapshot) => {
                    let data = [];
                    snapshot.forEach((doc) => {
                        data.push({
                            id: doc.id,
                            fantasyName: doc.data().fantasyName,
                            companyName: doc.data().companyName,
                            road: doc.data().road,
                            number: doc.data().number,
                            complement: doc.data().complement,
                            reference: doc.data().reference,
                            district: doc.data().district,
                            city: doc.data().city,
                            uf: doc.data().uf,
                            code: doc.data().code,
                            ddd: doc.data().ddd,
                            phone: doc.data().phone,
                            ddd2: doc.data().ddd2,
                            phone2: doc.data().phone2,
                            email: doc.data().email,
                            segment: doc.data().segment,
                            percentage: doc.data().percentage,
                            instagram: doc.data().instagram,
                            facebook: doc.data().facebook,
                            description: doc.data().description,
                            image: doc.data().avatarUrl
                        })
                    })
                    setData(data);
                    console.log(data)
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        loadCompanies();
    }, [])


    function handleDelete(id) {
        console.log(id)
        deleteCompany(id)
    }

    function handleEdit(id) {
        history.push(`/admin/editparceiro/${id}`)
    }


    return (
        <div className="container">
            <Navbar2 />
            <div className="content">
                <div className="dashboard-data">
                    <UserLogin />
                    <div className="data-company">
                        <h3>PARCEIROS CADASTRADOS</h3>
                        <br />
                        <Link className="btn-header-2" to='/admin/novoparceiro'>+ Cadastrar Novo Parceiro</Link>
                        <br />
                        {
                            data.map((company) => {
                                return (
                                    <div className="company-data">
                                        <div className="company-img">
                                            <img src={company.image} alt="logo" />
                                        </div>
                                        <div className="data-company-infos">
                                            <h2>{company.fantasyName}</h2>
                                            <h2>{company.companyName}</h2>
                                            <div className="company-infos">
                                                <h4>Endereço: {company.road}, {company.number}, {company.complement}, </h4>
                                                <h4>{company.district} - {company.city} - {company.uf} | {company.reference}</h4>
                                                <h4>CEP: {company.code} </h4>
                                                <h4>Telefone: ({company.ddd}){company.phone} | ({company.ddd2}) {company.phone2}</h4>
                                                <h4>Instagram: {company.instagram} | Facebook: {company.facebook}</h4>
                                            </div>
                                            <h5>{company.segment}</h5>
                                            <div className="buttons-company">
                                                <button onClick={() => handleEdit(company.id)}>Editar</button>
                                                <button onClick={() => handleDelete(company.id)}>Excluir</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompanyPageAdmin;