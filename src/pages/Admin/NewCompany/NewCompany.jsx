import React, { useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import avatarLogo from '../../../assets/images/avatar.svg';
import { FiUpload } from 'react-icons/fi';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './newCompany.css';
import UserLogin from '../../../components/UserLogin/UserLogin';
import Footer2 from '../../../components/Footer2/Footer2';

function NewCompany() {
    const [companyName, setCompanyName] = useState('');
    const [road, setRoad] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [reference, setReference] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [ddd2, setDdd2] = useState('');
    const [phone2, setPhone2] = useState('');
    const [ddd, setDdd] = useState('');
    const [phone, setPhone] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [percentage, setPercentage] = useState('');
    const [segment, setSegment] = useState('Selecione');
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [description, setDescription] = useState('');




    function handleFile(e) {
        console.log(e.target.files[0])

        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
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

        const uploadTask = await firebase.storage()
            .ref(`images/${imageAvatar.name}`)
            .put(imageAvatar)
            .then(async () => {
                await firebase.storage().ref(`images`)
                    .child(imageAvatar.name)
                    .getDownloadURL()
                    .then(async (url) => {
                        let urlImage = url;
                        console.log(url)

                        await firebase.firestore().collection('company')
                            .add({
                                companyName: companyName,
                                road: road,
                                number: number,
                                complement: complement,
                                reference: reference,
                                district: district,
                                city: city,
                                uf: uf,
                                code: code,
                                email: email,
                                ddd: ddd,
                                phone: phone,
                                ddd2: ddd2,
                                phone2: phone2,
                                instagram: instagram,
                                facebook: facebook,
                                segment: segment,
                                percentage: percentage,
                                description: description,
                                avatarUrl: urlImage,
                                date: new Date()
                            }).then(() => {
                                setInstagram('');
                                setCompanyName('');
                                setFacebook('');
                                setRoad('');
                                setNumber('');
                                setComplement('');
                                setDistrict('');
                                setReference('');
                                setCity('');
                                setUf('');
                                setCode('');
                                setEmail('');
                                setDdd('');
                                setPhone('');
                                setDdd2('');
                                setPhone2('');
                                setPercentage('');
                                setSegment('');
                                setAvatarUrl(null);
                                setDescription('');

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
        console.log(uploadTask);
    };

    function handleSelectSegment(e) {
        setSegment(e.target.value)
    }

    function handleSelectUf(e) {
        setUf(e.target.value)
    }

    return (
        <div className="container">
            <Navbar2 />
            <div className="content">
                <UserLogin />
                <div className="box">
                    <h1> CADASTRO DE PARCEIROS</h1>
                    <form className="form-company" onSubmit={handleAddCompany}>
                        <div className="image">
                            <label className="label-avatar">
                                <span><FiUpload color="#f65" size={25} /></span>
                                <input type="file" accept="image/*" onChange={handleFile} /><br />
                                <img src={avatarUrl === null ? avatarLogo : avatarUrl} alt="Avatar" height={191} width={191} />
                            </label>
                        </div>
                        <div className="data">
                            <div className="company-data">
                                <span>Dados Empresa</span>

                                <label>Empresa: </label>
                                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                                <span>Dados Contato</span>

                                <label>Email: </label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Telefone/Whatsapp: </label>
                                <div className="phone">
                                    <div className="ddd-phone">
                                        <input type="text" value={ddd} onChange={(e) => setDdd(e.target.value)} />
                                    </div>
                                    <div className="number-phone">
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                </div>
                                <label>Telefone/Whatsapp: </label>
                                <div className="phone">
                                    <div className="ddd-phone">
                                        <input type="text" value={ddd2} onChange={(e) => setDdd2(e.target.value)} />
                                    </div>
                                    <div className="number-phone">
                                        <input type="text" value={phone2} onChange={(e) => setPhone2(e.target.value)} />
                                    </div>
                                </div>

                                <label>Redes sociais: </label>
                                <div className="redes-sociais">
                                    <div className="instagram">
                                        <input type="text" value={instagram} placeholder="Instagram" onChange={(e) => setInstagram(e.target.value)} />
                                    </div>
                                    <div className="facebook">
                                        <input type="text" value={facebook} placeholder="Facebook" onChange={(e) => setFacebook(e.target.value)} />
                                    </div>
                                </div>


                                <span>DESCONTOS</span>

                                <label>Segmento: </label>
                                <select value={segment} onChange={handleSelectSegment}>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Hoteis e Pousadas">Hoteis e Pousadas</option>
                                    <option value="Comércio de Óculos">Comércio de Óculos</option>
                                    <option value="Cafeteria">Cafeteria</option>
                                    <option value="Comunicação Visual e Gráfica">Comunicação Visual e Gráfica</option>
                                    <option value="Peças, Acessórios e Baterias Automotivas">Peças, Acessórios e Baterias Automotivas</option>
                                    <option value="Agência de viagens e Excursões">Agência de viagens e Excursões</option>
                                    <option value="Moda Praia">Moda Praia</option>
                                    <option value="Restaurantes e Fast Foods">Restaurantes e Fast Foods</option>
                                    <option value="Supermercados e Padarias">Supermercados e Padarias</option>
                                    <option value="Padarias e Supermercados">Padarias e Supermercados</option>
                                    <option value="Loja de roupas">Loja de roupas</option>
                                    <option value="Sapatos e Calçados">Sapatos e Calçados</option>
                                    <option value="Loja de roupas infantís">Loja de roupas infantís</option>
                                    <option value="Lavanderia">Lavanderia</option>
                                    <option value="Jóias e Acessórios">Jóias e Acessórios</option>
                                    <option value="Sorveteria e Açaí">Sorveteria e Açaí</option>
                                    <option value="Informatica e Tecnologia">Informatica e Tecnologia</option>
                                    <option value="Advocacia">Advocacia</option>
                                    <option value="Contabilidade">Contabilidade</option>
                                    <option value="Marketing Digital">Marketing Digital</option>
                                    <option value="Salão de Beleza e Barbearia">Salão de Beleza e Barbearia</option>
                                    <option value="Mat. de Construção e Reformas">Mat. de Construção e Reformas</option>
                                </select>

                                <label>% de desconto: </label>
                                <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
                                <label>Descrição do desconto: </label>
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                            </div>


                            <div className="adrress">
                                <span>Dados Endereço</span>

                                <label>Rua: </label>
                                <input type="text" value={road} onChange={(e) => setRoad(e.target.value)} />
                                <label>Nº: </label>
                                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                                <label>Complemento: </label>
                                <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)} />
                                <label>Referência: </label>
                                <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} />
                                <label>Bairro: </label>
                                <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />

                                <label>Cidade: </label>
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                                <label>Estado: </label>
                                <select value={uf} onChange={handleSelectUf}>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Acre - AC">Acre - AC</option>
                                    <option value="Alagoas - AL">Alagoas - AL</option>
                                    <option value="Amapá - AP">Amapá - AP</option>
                                    <option value="Amazonas - AM">Amazonas - AM</option>
                                    <option value="Bahia - BA">Bahia - BA</option>
                                    <option value="Ceará - CE">Ceará - CE</option>
                                    <option value="Distrito Federal - DF">Distrito Federal - DF</option>
                                    <option value="Espírito Santo - ES">Espírito Santo - ES</option>
                                    <option value="Goiás - GO">Goiás - GO</option>
                                    <option value="Maranhão - MA">Maranhão - MA</option>
                                    <option value="Mato Grosso - MT">Mato Grosso - MT</option>
                                    <option value="Mato Grosso do Sul - MS">Mato Grosso do Sul - MS</option>
                                    <option value="Minas Gerais - MG">Minas Gerais - MG</option>
                                    <option value="Pará - PA">Pará - PA</option>
                                    <option value="Paraíba - PB">Paraíba - PB</option>
                                    <option value="Paranpa - PR">Paranpa - PR</option>
                                    <option value="Pernambuco - PE">Pernambuco - PE</option>
                                    <option value="Piauí - PI">Piauí - PI</option>
                                    <option value="Roraima - RR">Roraima - RR</option>
                                    <option value="Rondônia - RO">Rondônia - RO</option>
                                    <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
                                    <option value="Rio Grande do Norte - RN">Rio Grande do Norte - RN</option>
                                    <option value="Rio Grande do Sul - RS">Rio Grande do Sul - RS</option>
                                    <option value="Santa Catarina - SC">Santa Catarina - SC</option>
                                    <option value="São Paulo - SP">São Paulo - SP</option>
                                    <option value="Sergipe - SE">Sergipe - SE</option>
                                    <option value="Tocantins - TO">Tocantins - TO</option>
                                </select>
                                <label>CEP: </label>
                                <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />

                            </div>

                        </div>

                        <button type="submit" >Cadastrar Parceiro</button>
                    </form>

                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default NewCompany;