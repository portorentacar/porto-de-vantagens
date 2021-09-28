import React, { useContext, useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import { AuthContext } from '../../../contexts/Auth';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './dashboard.css'

function Dashboard() {
    const [data, setData] = useState([]);
    const [cupons, setCupons] = useState([]);
    const {user, signOut} = useContext(AuthContext);

    useEffect(() => {
        async function loadCompanies() {
            await firebase.firestore().collection('company')
            .get()
                .then((snapshot) => {
                    let data = [];
                    snapshot.forEach((doc) => {
                        data.push({
                        fantasyName:doc.data().fantasyName,
                        road:doc.data().road,
                        number:doc.data().number,
                        complement:doc.data().complement,
                        reference:doc.data().reference,
                        district:doc.data().district,
                        city:doc.data().city,
                        uf:doc.data().uf,
                        code:doc.data().code,
                        ddd:doc.data().ddd,
                        phone:doc.data().phone,
                        email:doc.data().email,
                        segment:doc.data().segment,
                        percentage:doc.data().percentage,
                        image: doc.data().avatarUrl,
                        })
                    })
                    setData(data);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        loadCompanies();


    //CARREGANDO OS CUPONS
    async function loadCupons() {
        await firebase.firestore().collection('cupons')
        .get()
            .then((snapshot) => {
                let list = [];

                
                snapshot.forEach((doc) => {

                    const dateFormated = doc.data().date.toDate();
                    const newDateFormated = ((dateFormated.getDate() )) + "/" + ((dateFormated.getMonth() + 1)) + "/" + dateFormated.getFullYear();

                    list.push({
                        id: doc.id,
                        name:doc.data().name,
                        contract:doc.data().contract,
                        cpf:doc.data().cpf,
                        date: newDateFormated
                    })
                })
                setCupons(list);
            }).catch(error => {
                console.log(error)
                toast.error('Ops. Deu algo errado');
            })
    }

    loadCompanies();
    loadCupons();
    }, [])

    return (
        <div className="container">
             <Navbar2 />
        <div className="content">

        <div className="dashboard">
            <div className="header">
            <h2> Seja bem-vindo, {user.name}</h2>
            <button type="button" onClick={signOut}>Sair</button>
            </div>            
        

        <div className="dashboard-data">
            <div className="data-cupons">
                <h3>ULTIMOS CUPONS GERADOS</h3>
               <br />
               {
                   cupons.map((cupom) => {
                       return (
                           <div className="cupom-data">
                               <h4>{cupom.name}</h4>
                               <div className="cupom-infos">
                               <h6>Contrato: {cupom.contract}</h6>
                               <h6>CPF: {cupom.cpf}</h6>
                               <h6>Data: {cupom.date}</h6>
                               </div>
                               <h4>Cupom: {cupom.id}</h4>
                           </div>
                       )
                   })
               }
            </div>
            <div className="data-company">
            <h3>ULTIMOS PARCEIROS CADASTRADOS</h3>
           <br />
           {
                   data.map((company) => {
                       return (
                            <div className="company-data">
                                <h4>{company.fantasyName}</h4>
                               <div className="company-infos">
                               <h6>Endereço: {company.road}, {company.number}, {company.complement}, </h6>
                               <h6>{company.district} - {company.city} - {company.uf} | {company.reference}</h6>
                               </div>
                               <h4>{company.segment}</h4>
                            </div>
               )
            })
        }
            </div>

            </div>
        </div>
        </div>

        </div>
    )
}

export default Dashboard;