import React from 'react';
import { Link } from 'react-router-dom';
import { FiUserPlus, FiTrendingUp, FiShoppingBag, FiCoffee, FiBriefcase, FiGlobe, FiRefreshCw, FiActivity } from 'react-icons/fi';
import companyTitle from '../../assets/images/parceiros.svg';
import companyImg from '../../assets/images/parceirosCentro.png';
import './enterprise.css'


function Enterprise() {
    return (
        <div className="container">
            <div className="content">
                <div className="company">
                    <div className="company-texts">

                        <div className="company-text-iten">
                            <FiRefreshCw size={125} color='#2E4562' />
                            <div className="iten-text">
                                <h3>+ CLIENTES RECORRENTES</h3>
                                <p>Com a utilização dos cupons os clientes terão a possibilidade de aproveitar a qualidade de seu produto ou serviço por mais vezes </p>
                            </div>
                        </div>

                        <div className="company-text-iten">

                            <FiActivity size={125} color='#2E4562' />
                            <div className="iten-text">
                                <h3>+ VISIBILIDADE </h3>
                                <p>Sua empresa estará sempre em evidência na procura pelo seu segmento. Os clientem voltaram mesmo sem o benefício do desconto </p>
                            </div>
                        </div>


                        <div className="company-text-iten">
                            <FiTrendingUp size={125} color='#2E4562' />
                            <div className="iten-text">
                                <h3>+ AUMENTO DE RECEITA</h3>
                                <p>Quando mais cupons forem gerados, mais clientes procuraram sua empresa para aproveitar seus benefícios disponíveis </p>
                            </div>
                        </div>


                        <div className="company-text-iten">
                            <FiUserPlus size={125} color='#2E4562' />
                            <div className="iten-text">
                                <h3>+ CAPTAÇÃO DE NOVOS CLIENTES</h3>
                                <p>Além dos clientes recorrentes, novos cliente que visitam a cidade teram conhecimento de seu negócio através do clube de vantagens </p>
                            </div>
                        </div>
                    </div>

                    <div className="title">
                        <img src={companyTitle} alt="title-section" />
                        <div className="image">
                            <img src={companyImg} alt="imagem" />
                        </div>
                        <Link to="/parceiros" className="btn-company">VEJA COMO SER UM PARCEIRO</Link>
                    </div>


                    <div className="company-texts">
                        <div className="company-text-iten2">
                            <div className="iten-text">
                                <h3>+ NOVOS NEGÓCIOS</h3>
                                <p>Com o aumento da distribuíção de cupons e clientes na região, abrirá novas possibilidades para aberturas de novas empresas </p>
                            </div>
                            <FiShoppingBag size={125} color='#2E4562' />
                        </div>


                        <div className="company-text-iten2">
                            <div className="iten-text">
                                <h3>+ VALORIZAÇÃO DO COMERCIO LOCAL</h3>
                                <p>Ter descontos em grande variedades de empresas parceiras trará consequentemente novos clientes para a região </p>
                            </div>
                            < FiCoffee size={125} color='#2E4562' />
                        </div>


                        <div className="company-text-iten2">
                            <div className="iten-text">
                                <h3>+ POSSIBILIDADE DE NOVAS PARCERIAS </h3>
                                <p>Além da parceria entre empresas e a Porto Rent a Car. Novas parcerias podem ser criadas, gerando mais benefícios e aumento de clientes</p>
                            </div>
                            <FiBriefcase size={125} color='#2E4562' />
                        </div>

                        <div className="company-text-iten2">
                            <div className="iten-text">
                                <h3>+ EVIDENCIA DA MARCA </h3>
                                <p>Sua empresa estará sempre disponível no catálogo de parceiros, ficando em evidência para os clientes que desejam aproveitar os seus benefícios obtidos </p>
                            </div>
                            <FiGlobe size={125} color='#2E4562' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Enterprise;
