import React, { useState, useContext } from 'react';
import {useParams, useHistory} from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import {FiCopy, FiCheckCircle, FiSearch} from 'react-icons/fi'
import './searchCupom.css'
import { AuthContext } from '../../contexts/Auth';
import Navbar from '../../components/Navbar/index'

function SearchCupom() {
        const {copiCode} = useContext(AuthContext)
        const history = useHistory()
        const [cpf, setCpf] = useState('');
        const [data, setData] = useState([]);
        const [verification, setVerification] = useState('');
        const {id} = useParams()

async function handleSearchCupons(e) {
    e.preventDefault();
    await firebase.firestore().collection("cupons").where("cpf", "==", cpf.toString())
    .get()
        .then((snapshot) => {
           let list = []
            snapshot.forEach((doc) => {
                const dateFormated = doc.data().date.toDate();
                const newDateFormated = ((dateFormated.getDate() )) + "/" + ((dateFormated.getMonth() + 1)) + "/" + dateFormated.getFullYear(); ;
                //console.log(newDateFormated)
                const newDate = doc.data().date.toDate()
                const dateActual = new Date();
                 const timeDifference = Math.abs(dateActual.getTime() - newDate.getTime());
                const datDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
                let disponible;
                let css;
                if(datDifference <= 30) {
                    disponible = 'Disponível'
                    css = 'verde-search'
                } else {
                    disponible = 'Expirado'
                    css = 'vermelho-search'
                }

               //console.log(doc.data().cpf) 
                list.push({
                    id:doc.id,
                    name:doc.data().name,
                    contract: doc.data().contract,
                    cpf: doc.data().cpf,
                    disponible,
                    newDateFormated: newDateFormated,
                    css: css,
            })
            })
            console.log(list);
            setData(list);
            
           if(list.length > 0) {
                setVerification('1')
           } else {
               toast.error('Entre com seu CPF por favor!');
           }
        }).catch(error => {
                            console.log(error)
                            toast.error('Ops. Deu algo errado');
                        })
}


function handleCopyCode(code) {
    copiCode(code);
      toast.success(`Código copiado com sucesso: ${code}`)
}

function handleRedirect() {
    history.push("/validar-cupom")
}
    
    return (
        <div className="container">
            <Navbar />
        <div className="content">
        <div className="box">
            <br/> <br/> <br/> <br/>
            <h1> VER MEUS CUPONS {id}</h1>
            <form className="form-search">
                <label>CPF (Apenas números)</label>
                <input type="text" value={cpf} onChange={e => setCpf(e.target.value) }/>

                <button className="btn-form" type="submit" onClick={handleSearchCupons} >< FiSearch /> BUSCAR</button>
            </form>
            
        {verification === ''? 
        <div className="text-info"><p>VOCÊ VERÁ SEUS CUPONS AQUI!</p></div>: 
        data.map(user => {
            return (
                <div className={user.css}>
                    <div className="data">
                        <div className="infos">
                        <p><b>Contrato:</b> {user.contract}</p>
                        <p><b>CPF:</b> {user.cpf}</p>
                        <p><b>Data de início:</b> {user.newDateFormated}</p>
                        </div>
                        <div className="name">
                        <p><b>Nome:</b> {user.name}</p>
                        </div>
                        <h2>{user.id}</h2>
                    </div>
                    <div className="buttons">
                        <button type="button" onClick={() => handleCopyCode(user.id)}><FiCopy size={20}/> COPIAR CUPOM</button>
                        <button type="button" onClick={handleRedirect} >< FiCheckCircle size={20} />VALIDAR CUPOM</button>
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

export default SearchCupom;
