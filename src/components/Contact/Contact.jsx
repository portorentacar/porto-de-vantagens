import React from 'react';
import mapImg from '../../assets/images/map.png';
import faleConosco from '../../assets/images/faleConosco.svg';
import {FiPhoneCall, FiMapPin, FiMail} from 'react-icons/fi';
import './contact.css'
 
 
function Contact() {
    return (
        <div className="container">
        <div className="content">
        <div className="contact">
            <div className="map">
            <img src={mapImg} alt="maps" />
            </div>
            <div className="contact-info">
                <img src={faleConosco} alt="fale Conosco" />
                <div className="infos">
                    <p>< FiPhoneCall /> 22 3031-4272</p>
                    <p>< FiMail /> reservas@portorentacar.com.br</p>
                    <p>< FiMapPin /> Shopping Ipanema Mall - Rua Raul Veiga,</p>
                    <p className="line">389 – Loja 28 – Centro, Cabo Frio – RJ</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Contact;