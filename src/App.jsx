import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import AuthProvider from './contexts/Auth';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <ToastContainer autoClose={3000}/>
    <Routes />
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
