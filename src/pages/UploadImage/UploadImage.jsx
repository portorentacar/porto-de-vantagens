import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import avatarLogo from '../../assets/images/avatar.svg';
import {FiUpload} from 'react-icons/fi'
import './uploadImage.css'

function UploadImage() {
    const [cnpj, setCpnj] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');

    function handleFile(e) {
        console.log(e.target.files[0])

       if(e.target.files[0]){
           const image = e.target.files[0];

           if(image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
               setImageAvatar(image);
               setAvatarUrl(URL.createObjectURL(e.target.files[0]))
           } else {
               toast.error('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
               setImageAvatar(null);
               return null;
           }
       }
    }

    async function handleAddCompany(e) {
        e.preventDefault();

        if(cnpj !== '' &&
        companyName !== '' &&
        fantasyName !== '' &&
        imageAvatar !== '' ) {

        const uploadTask = await firebase.storage()
            .ref(`images/${imageAvatar.name}`)
            .put(imageAvatar)
            .then(async () => {
                    await firebase.storage().ref(`images`)
                        .child(imageAvatar.name)
                        .getDownloadURL()
                        .then( async (url) => {
                            let urlImage = url;
                            console.log(url)

                            await firebase.firestore().collection('company')
                                .add({
                                    cnpj:cnpj,
                                    companyName:companyName,
                                    fantasyName:fantasyName,
                                    avatarUrl: urlImage
                                }).then(() => {
                                    setCpnj('');
                                    setCompanyName('');
                                    setFantasyName('');
                                    setAvatarUrl(null);
                        
                                    toast.success('Novo parceiro cadastrado com sucesso!')
                                }).catch(error => {
                                    console.log(error)
                                    toast.error('Ops. Deu algo errado')
                                })
                        }).catch(error => {
                            console.log(error);
                            toast.error('Ops. Deu algo errado. Tente novamente ou contate o desenvovedor!')
                        })
            }).catch(error => {
                console.log(error);
                toast.error('Ops. Deu algo errado. Tente novamente ou contate o desenvovedor!')
            })
            console.log(uploadTask)
    }  else {
        toast.error('Preencha todos os campos corretamente')
       };
      
};



    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> CADASTRO DE PARCEIROS</h1>
            <form className="form-company" onSubmit={handleAddCompany}>
                <div className="image">
                            <label className="label-avatar">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFile}/><br />
                            <img src={avatarUrl === null ? avatarLogo : avatarUrl} alt="Avatar" height={191} width={191}/>
                        </label>
                </div>
                <div className="data">
                <div className="company-data">
                        <span>Dados Empresa</span>
                       
                            <label>CNPJ: </label>
                            <input type="text" value={cnpj} onChange={(e) => setCpnj(e.target.value)} />
                            <label>Razão Social: </label>
                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            <label>Nome Fantasia: </label>
                            <input type="text" value={fantasyName}  onChange={(e) => setFantasyName(e.target.value)}/>

                </div>

                
              

                            </div>
                            
                        <button type="submit" >Cadastrar Empresa</button>
                    </form>
            
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default UploadImage;