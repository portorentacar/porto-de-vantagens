import React,{ useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './cuponsEdit.css';
import { useParams, useHistory } from 'react-router';

function CuponsEdit() {
    const {id} = useParams()
    const history = useHistory()
    const [contract, setContract] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');


    useEffect(() => {
          async function loadCupom() {
            await firebase.firestore().collection('cupons').doc(id)
            .get()
                .then((snapshot) => {
                    setCpf(snapshot.data().cpf);
                    setName(snapshot.data().name);
                    setContract(snapshot.data().contract)
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }
        loadCupom()
    }, [id])

    async function handleEditCupom(e) {
        e.preventDefault();
        
        if(contract !== '' &&
            cpf !== '' &&
            name !== '' ) {
        await firebase.firestore().collection('cupons')
        .doc(id).update({
            contract: contract,
            cpf: cpf,
            name:name
        }).then(() => {
            setContract('');
            setName('');
            setCpf('');
            toast.success('Novo cupom editado com sucesso!');
            history.push('/')
        }).catch(error => {
            console.log(error)
            toast.error('Ops. Deu algo errado');
        })       
       } else {
        toast.error('Preencha todos os campos corretamente');
       }
    }

    return (
        <div className="container">
             <Navbar2 />
        <div className="content">
        <div className="cuponsEdit">
            <h1> GERAR NOVO CUPOM</h1>
            <form className="form" onSubmit={handleEditCupom}>
                <label>Nº CONTRATO</label>
                <input type="text" value={contract} onChange={(e) => setContract(e.target.value)} />
                <label>NOME COMPLETO</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>CPF (Apenas números)</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}/>

                <button>EDITAR CUPOM</button>
            </form>
            
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default CuponsEdit;