import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import './companies.css';
import Navbar from '../../components/Navbar/index'


function Companies() {
    const [segment, setSegment] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadCompanies() {
            await firebase.firestore().collection('company')
            .get()
                .then((snapshot) => {
                    console.log('snapshot: ' + snapshot)
                    let list = [];
                    snapshot.forEach((doc) => {
                        list.push({
                        fantasyName:doc.data().fantasyName,
                        companyName: doc.data().companyName,
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
                        ddd2:doc.data().ddd2,
                        phone2:doc.data().phone2,
                        email:doc.data().email,
                        segment:doc.data().segment,
                        percentage:doc.data().percentage,
                        instagram:doc.data().instagram,
                        facebook:doc.data().facebook,
                        description:doc.data().description,
                        image: doc.data().avatarUrl
                        })
                    })

                    console.log(list);
                    setData(list);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        async function loadCondidional() {
            await firebase.firestore().collection('company').where("segment", "==", segment)
            .get()
                .then((snapshot) => {
                    let list = [];
                    snapshot.forEach((doc) => {
                        list.push({
                        fantasyName:doc.data().fantasyName,
                        companyName: doc.data().companyName,
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
                        ddd2:doc.data().ddd2,
                        phone2:doc.data().phone2,
                        email:doc.data().email,
                        segment:doc.data().segment,
                        percentage:doc.data().percentage,
                        instagram:doc.data().instagram,
                        facebook:doc.data().facebook,
                        description:doc.data().description,
                        image: doc.data().avatarUrl
                        })
                    })

                    console.log(list);
                    setData(list);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        if(segment === '') {
            loadCompanies();
        } else {
            loadCondidional();
        }


    }, [segment])


    function handleSelectSegment(e) {
        setSegment(e.target.value);
        console.log(segment);
    }


    return (
        <div className="container">
            <Navbar />
        <div className="content">
            <div className="companies">
                <h1>NOSSOS PARCEIROS</h1>
                <h3>VEJA ONDE USAR OS CUPONS E OS DESCONTOS OFERTADOS</h3>

                <div className="box">
            <form className="form">
                <label>Busque empresas por seguimento</label>
                <select value={segment} onChange={handleSelectSegment}>
                     <option value="">Todas as empresas parceiras</option>
                    {data.map(segments => {
                        return (
                             <option value={segments.segment}>{segments.segment}</option>
                        )
                    })}
                            </select> <br />
            </form>           
        </div>


        { data.map(company => {
                return (
                    <div className="companies-list" key={company.fantasyName}>
                    <img src={company.image} alt="companie" />
                    <div className="text">
                        <h2>{company.fantasyName}</h2>
                        <h2>{company.companyName}</h2>
                        <h4>End: {company.road}, Nº {company.number}, {company.complement}</h4>
                        <h4>{company.district} - {company.city} - {company.uf} | CEP: {company.code}</h4>
                        <h4>Telefone: ({company.ddd}) {company.phone} | ({company.ddd2}) {company.phone2}</h4>
                        <h4>E-mail: {company.email}</h4>
                        <h4>Instagram: {company.instagram} | Facebook: {company.facebook} </h4>
                        <h6>{company.segment}</h6>
                       <a className="btn-company-2" href={`https://www.google.com.br/maps/place/${company.road},+${company.number}-+${company.district},+${company.city}+-+${company.uf},+${company.code}/`} target="_blank" rel="noreferrer">Ver no mapa</a>
                    </div>
                    <div className="percentage">
                        {company.percentage === '' ? <h2> </h2>  : <h2>{company.percentage}%</h2>}
                        <h5>{company.description}</h5>
                    </div>
                </div>
                )
            })
            }
        
            </div>
        </div>
        <Footer />        
        </div>
    )
}

export default Companies;