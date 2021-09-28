import { createContext, useEffect, useState } from 'react';
import firebase from '../services/firebaseConnection';
import {toast} from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({children}) {
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
        setLoadingAuth(true);
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

                        setUser(data);
                        setLoadingAuth(false);
                        toast.success(`Seja bem-vindo(a), ${data.name}`);
                    }).catch(error => {
                        console.log(error);
                        toast.error(`Ops. Ocorreu algum erro!`)
                    })
            }).catch(error => {
                console.log(error);
                toast.error(`Ops. Ocorreu algum erro!`)
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
            cupom
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;