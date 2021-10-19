import Footer from "../../components/Footer/Footer";
import './tourism.css';
import Navbar from '../../components/Navbar/index';
import cabofrioImg from '../../assets/images/cabofrio.png'
import arraialImg from '../../assets/images/arraial.png'
import buziosImg from '../../assets/images/buzios.png'
function Tourism() {
    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <div className="tourism">
                    <h1>Turismo</h1>
                    <div className="text">
                        <p>Praias encantadoras, mar de águas claras, natureza exuberante e paisagens de tirar o fôlego.<br />
                            Além de aproveitar seus cupons de desconto, conheça também os melhores lugares para curtir em Arraial do Cabo, Buzios e
                            Cabo Frio<br />
                        </p>
                    </div>
                    <div className="city">
                        <h2>Arraial do Cabo</h2>
                        <p>Conhecida como Caribe brasileiro, Arraial do Cabo concentra praias deslumbrantes, com águas claras que variam entre tons de azul
                            e verde. A cidade possui uma incrível biodiversidade e não é difícil encontrar golfinhos e tartarugas no mar, sendo esse um dos
                            principais motivos que tornam Arraial a capital do mergulho. No local, há diversas opções de lazer, como passeios de barco, surf
                            e trilhas, para quem deseja apreciar a natureza e contemplar as belas paisagens da cidade.</p>
                        <img src={arraialImg} alt="Arraial do Cabo" />
                        <a href="https://www.arraial.rj.gov.br/portal/turismo/9" target="_blank" rel="noreferrer">+ Turismo em Arraial do Cabo</a>
                    </div>
                    <div className="city">
                        <h2>Buzios</h2>
                        <p>A Armação dos Búzios, ou apenas Búzios, é uma península de apenas oito quilômetros de extensão, mas que reúne mais de 20 opções
                            de praias com diferentes características que agradam todos os gostos. A cidade encanta por suas belas pousadas, excelente gastronomia,
                            vida noturna agitada, boas opções de compras e, claro, pela deslumbrância de suas paisagens. Apesar de pequeno, o balneário oferece tantas
                            opções de lazer que é difícil não querer conhecer todas.</p>
                        <img src={buziosImg} alt="Buzios" />
                        <a href="https://turismo.buzios.rj.gov.br/" target="_blank" rel="noreferrer">+ Turismo em Buzios</a>
                    </div>
                    <div className="city">
                        <h2>Cabo Frio</h2>
                        <p>A maior cidade da Região dos Lagos, Cabo Frio possui localização privilegiada, já que está entre Búzios e Arraial do Cabo.
                            A cidade se destaca pela ótima infraestrutura para os turistas, com diversas opções de hospedagem e um comércio movimentado
                            para quem gosta de fazer compras. Apesar de serem distantes umas das outras, as praias da região são de fácil acesso e
                            oferecem paisagens naturais incríveis.</p>
                        <img src={cabofrioImg} alt="Cabo Frio" />
                        <a href="https://turismo.cabofrio.rj.gov.br/" target="_blank" rel="noreferrer">+ Turismo em Cabo Frio</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Tourism;