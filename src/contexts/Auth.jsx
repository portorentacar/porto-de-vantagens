import { createContext, useEffect, useState } from 'react';
import firebase from '../services/firebaseConnection';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router';

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const history = useHistory()
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(null)
    const [cupom, setCupom] = useState('')
    
    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem("SistemUser");
            
            if(storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false)
            }
            setLoading(false);
        }
        loadStorage();
    }, [])



    //CRIANDO CADASTRO DE LOGIN E USUÁRIO NO NO BANCO DE DADOS
    async function signUp(email, password, name) {
       // setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async (value) => {
                let uid = value.user.uid;

                await firebase.firestore().collection('users')
                    .doc(uid).set({
                       uid: uid,
                       name: name,
                       email: value.user.email
                    }).then(() => {
                        let data ={
                            uid: uid,
                            name: name,
                            email: value.user.email
                        };
                      //  setUser(data);
                      //  setLoadingAuth(false);
                        toast.success(`Usauário criado com sucesso`);
                        console.log(data)
                    }).catch(error => {
                        console.log(error);
                        toast.error(`Ops. Ocorreu algum erro!`)
                    })
            }).catch(error => {
                console.log(error);
                toast.error(`Ops. Ocorreu algum erro!`)
            })
    }

    //DELETANDO CUPOM
    async function deleteCupom(id) {
        await firebase.firestore().collection('cupons').doc(id).delete()
            .then(() => {
                toast.success('Cupom deletado com sucesso')
                history.push('/cupons')
            }).catch(error => {
                toast.error('Falha ao deletar')
            })
    }

    //DELETANDO PARCEIRO
    async function deleteCompany(id) {
         console.log(id)
        await firebase.firestore().collection('company').doc(id).delete()
            .then(() => {
                toast.success('Parceiro deletado com sucesso')
                history.push('/parceiros')
            }).catch(error => {
                toast.error('Falha ao deletar')
            })
    }

    //DELETANDO USUÁRIO
    async function userDelete(id) {
        await firebase.firestore().collection('users').doc(id).delete()
                        .then(() => {
                     toast.success('Usuário deletado com sucesso')
                    history.push('/usuarios')
                }).catch(error => {
                toast.error('Falha ao deletar usuário no banco de dados')
            })
    }
    
    //Efetuando login no sistema
    async function signIn(email, password) {
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const userProfile = await firebase.firestore().collection('users')
                    .doc(uid).get();

                let data = {
                    uid: uid,
                    name: userProfile.data().name,
                    email: value.user.email
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success(`Bem-vindo(a) de volta, ${data.name}`)
            }).catch(error => {
                console.log(error);
                toast.error(`Ops. Ocorreu algum erro!`)
            })
    }

    //SALVANDO NO LOCAL STORAGE
    function storageUser(data) {
        localStorage.setItem("SistemUser", JSON.stringify(data));
    }

    //LOGOUT - ENCERRANDO SESÃO
    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem("SistemUser");
        setUser(null)
    }

    //COPIANDO CÓDIGO DA BUSCA PARA APLICAR A VALIDAÇÃO
    function copiCode(code) {
        setCupom(code)
        console.log(code);
    }

    return (
        <AuthContext.Provider    
        value={{
            signed: !!user,
            user,
            loading,
            signUp,
            signOut,
            signIn,
            loadingAuth,
            setUser,
            storageUser,
            copiCode,
            deleteCupom,
            deleteCompany,
            userDelete,
            cupom
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;