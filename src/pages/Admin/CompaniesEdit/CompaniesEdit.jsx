import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import avatarLogo from '../../../assets/images/avatar.svg';
import { FiUpload } from 'react-icons/fi';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './companiesEdit.css';
import { useParams, useHistory } from 'react-router';
import UserLogin from '../../../components/UserLogin/UserLogin';
import Footer2 from '../../../components/Footer2/Footer2';

function CompaniesEdit() {
    const { id } = useParams();
    const history = useHistory()
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
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);
    const [description, setDescription] = useState('');


    useEffect(() => {
        async function loadCompanies() {
            await firebase.firestore().collection('company').doc(id)
                .get()
                .then((snapshot) => {
                    setCompanyName(snapshot.data().companyName)
                    setRoad(snapshot.data().road)
                    setNumber(snapshot.data().number)
                    setComplement(snapshot.data().complement)
                    setReference(snapshot.data().reference)
                    setDistrict(snapshot.data().district)
                    setCity(snapshot.data().city)
                    setUf(snapshot.data().uf)
                    setCode(snapshot.data().code)
                    setDdd(snapshot.data().ddd)
                    setPhone(snapshot.data().phone)
                    setDdd2(snapshot.data().ddd2)
                    setPhone2(snapshot.data().phone2)
                    setEmail(snapshot.data().email)
                    setSegment(snapshot.data().segment)
                    setPercentage(snapshot.data().percentage)
                    setInstagram(snapshot.data().instagram)
                    setFacebook(snapshot.data().facebook)
                    setDescription(snapshot.data().description)
                    setAvatarUrl(snapshot.data().avatarUrl)

                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        loadCompanies();
    }, [id])


    // Carregando imagem e salvando dados no banco de dados
    function handleFile(e) {
        console.log(e.target.files[0])

        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            } else {
                toast.error('Tipo dearquivo n??o aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImageAvatar(null);
                return null;
            }
        }
    }

    //Edit company
    async function handleAddCompany(e) {

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

                        await firebase.firestore().collection('company').doc(id)
                            .update({
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
                                avatarUrl: urlImage
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
                                setDescription(null);

                                toast.success('Parceiro editado com sucesso!')
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

    //Edit company of image
    async function updateCompany(e) {
        e.preventDefault();
        if (imageAvatar === null) {
            await firebase.firestore().collection('company').doc(id)
                .update({
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
                    setDescription(null);

                    toast.success('Parceiro editado com sucesso!');
                    history.push('/')
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado')
                })
        } else if (imageAvatar !== null) {
            handleAddCompany()
        }
    }

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
                <div className="companiesEdit">
                    <UserLogin />
                    <h1> EDI????O DE PARCEIROS</h1>
                    <form className="form-company" onSubmit={updateCompany}>
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
                                    <option value="Advocacia">Advocacia</option>
                                    <option value="Ag??ncia de viagens e Excurs??es">Ag??ncia de viagens e Excurs??es</option>
                                    <option value="Cafeteria">Cafeteria</option>
                                    <option value="Comunica????o Visual e Gr??fica">Comunica????o Visual e Gr??fica</option>
                                    <option value="Contabilidade">Contabilidade</option>
                                    <option value="Corretora de Investimentos">Corretora de Investimentos</option>
                                    <option value="Hoteis e Pousadas">Hoteis e Pousadas</option>
                                    <option value="Informatica e Tecnologia">Informatica e Tecnologia</option>
                                    <option value="Internet, Telefonia e Comunica????o">Internet, Telefonia e Comunica????o</option>
                                    <option value="Imobili??rias">Imobili??rias</option>
                                    <option value="J??ias e Acess??rios">J??ias e Acess??rios</option>
                                    <option value="Lavanderia">Lavanderia</option>
                                    <option value="Lava Jato e Boutique de ve??culos">Lava Jato e Boutique de ve??culos</option>
                                    <option value="Loja de roupas infant??s">Loja de roupas infant??s</option>
                                    <option value="Loja de roupas">Loja de roupas</option>
                                    <option value="Mat. de Constru????o e Reformas">Mat. de Constru????o e Reformas</option>
                                    <option value="Materiais Esportivos e Itens de Times">Materiais Esportivos e Itens de Times</option>
                                    <option value="Marketing Digital">Marketing Digital</option>
                                    <option value="Moda Praia">Moda Praia</option>
                                    <option value="Padarias e Supermercados">Padarias e Supermercados</option>
                                    <option value="Papelaria e Livraria">Papelaria e Livraria</option>
                                    <option value="Pe??as, Acess??rios e Baterias Automotivas">Pe??as, Acess??rios e Baterias Automotivas</option>
                                    <option value="Pet Shop e Cl??nica Veterin??ria">Pet Shop e Cl??nica Veterin??ria</option>
                                    <option value="Posto de gasolina e GNV">Posto de gasolina e GNV</option>
                                    <option value="Restaurantes e Fast Foods">Restaurantes e Fast Foods</option>
                                    <option value="Sal??o de Beleza e Barbearia">Sal??o de Beleza e Barbearia</option>
                                    <option value="Sapatos e Cal??ados">Sapatos e Cal??ados</option>
                                    <option value="Sites, sistemas e aplicativos">Sites, sistemas e aplicativos</option>
                                    <option value="Sorveteria e A??a??">Sorveteria e A??a??</option>
                                    <option value="Supermercados e Padarias">Supermercados e Padarias</option>
                                    <option value="??ticas e Cl??nica de Oftalmologia">??ticas e Cl??nica de Oftalmologia</option>

                                </select>

                                <label>% de desconto: </label>
                                <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
                                <label>Descri????o do desconto: </label>
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                            </div>


                            <div className="adrress">
                                <span>Dados Endere??o</span>

                                <label>Rua: </label>
                                <input type="text" value={road} onChange={(e) => setRoad(e.target.value)} />
                                <label>N??: </label>
                                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                                <label>Complemento: </label>
                                <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)} />
                                <label>Refer??ncia: </label>
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
                                    <option value="Amap?? - AP">Amap?? - AP</option>
                                    <option value="Amazonas - AM">Amazonas - AM</option>
                                    <option value="Bahia - BA">Bahia - BA</option>
                                    <option value="Cear?? - CE">Cear?? - CE</option>
                                    <option value="Distrito Federal - DF">Distrito Federal - DF</option>
                                    <option value="Esp??rito Santo - ES">Esp??rito Santo - ES</option>
                                    <option value="Goi??s - GO">Goi??s - GO</option>
                                    <option value="Maranh??o - MA">Maranh??o - MA</option>
                                    <option value="Mato Grosso - MT">Mato Grosso - MT</option>
                                    <option value="Mato Grosso do Sul - MS">Mato Grosso do Sul - MS</option>
                                    <option value="Minas Gerais - MG">Minas Gerais - MG</option>
                                    <option value="Par?? - PA">Par?? - PA</option>
                                    <option value="Para??ba - PB">Para??ba - PB</option>
                                    <option value="Paranpa - PR">Paranpa - PR</option>
                                    <option value="Pernambuco - PE">Pernambuco - PE</option>
                                    <option value="Piau?? - PI">Piau?? - PI</option>
                                    <option value="Roraima - RR">Roraima - RR</option>
                                    <option value="Rond??nia - RO">Rond??nia - RO</option>
                                    <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
                                    <option value="Rio Grande do Norte - RN">Rio Grande do Norte - RN</option>
                                    <option value="Rio Grande do Sul - RS">Rio Grande do Sul - RS</option>
                                    <option value="Santa Catarina - SC">Santa Catarina - SC</option>
                                    <option value="S??o Paulo - SP">S??o Paulo - SP</option>
                                    <option value="Sergipe - SE">Sergipe - SE</option>
                                    <option value="Tocantins - TO">Tocantins - TO</option>
                                </select>
                                <label>CEP: </label>
                                <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />

                            </div>

                        </div>

                        <button type="submit" >Atualizar Parceiro</button>
                    </form>

                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default CompaniesEdit;