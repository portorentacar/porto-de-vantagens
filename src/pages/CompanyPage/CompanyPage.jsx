import React from 'react';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Nav2 from '../../components/Nav/Navbar'
import './companyPage.css'
function CompanyPage() {
    return (
        <div className="container">
            <Nav2 />
            <div className="content">
                <div className="companyPage">
                    <h1>SEJA UM PARCEIRO</h1>
                    <p> “Porto de Vantagens” é um programa de parceria da Porto Rent a Car que visa valorizar o comércio local através de descontos para clientes que alugarem seus veículos conosco. A parceria visa fomentar o consumo em empresas parceiras através de cupons de uso exclusivo de nossos clientes válidos por período pré-determinado para uso nos estabelecimentos parceiros da Porto Rent a Car.</p>

                    <p>Para participar do programa, basta (colocar o que precisa ser feito). Depois disso, sua empresa será cadastrada em nosso site exclusivo da Porto de Vantagens, com a sua marca e as informações dos benefícios oferecidos ao cliente Porto. </p>

                    <p>A Porto Rent a Car possui parceria com diversos órgãos e empresas renomadas (consulte nossos parceiros em nosso site). Assim, o seu negócio ganha, com o direcionamento de clientes de um público seleto e refinado, que terá benefícios em consumir seu produto ou serviço. Além disso, a campanha será amplamente divulgada pela Porto Rent a Car em seus meios digitais e físicos.</p>

                    <h3>Seja parceiro da Porto de Vantagens!</h3>
                </div>
                <Contact />
                <br /><br />
            </div>
            <Footer />
        </div>
    )
}

export default CompanyPage;