import React from 'react';
import {Link} from 'react-router-dom'
import delimiterImg from '../../assets/images/delimiter.svg'
import regulationImg from '../../assets/images/comoParticipar.svg'
import regulationImg2 from '../../assets/images/regulationImg.png'
import './regulation.css'

function Regulation() {
    return (
        <div className="container">
        <div className="content">
        <div className="regulation">
            <div className="demiliter">
                    <img src={delimiterImg} alt="delimiter" />
            </div>
            <div className="info-regulation">
                <div className="text-itens-regulation">
                    <img src={regulationImg} alt="regulation" />
                    <div className="text-regulation">
                        <p>Para participar do programa basta alugar um veículo com a Porto Rent a Car.
                        Você ganhará o benefício de 1 Cupom de desconto que terá validade de 30
                        dias para usar em qualquer uma de nossas empresas parceiras. </p>
                    <div className="buttons-regulation">
                            <Link className="btn-regulation"  to='/regulamento'>VER REGULAMENTO COMPLETO</Link>
                            <Link className="btn-regulation-2" to='/onde-usar'>ONDE USAR MEUS CUPONS?</Link>
                    </div>
                    </div>
                    
                    </div>
                <div className="img-regulation">
                        <img src={regulationImg2} alt="" />
                </div>
                
            </div>
        </div>
        </div>
        </div>
    )
}


export default Regulation;