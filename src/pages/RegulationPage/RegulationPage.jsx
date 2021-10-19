import Footer from "../../components/Footer/Footer";
import './regulationPage.css'
import Navbar from '../../components/Navbar/index'
function RegulationPage() {
    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <div className="regulation-page">
                    <h1>REGULAMENTO</h1>
                    <div className="text">
                <p>O programa PORTO DE VANTAGENS é válido exclusivamente para os estabelecimentos parceiros previamente cadastrados em nosso hot site, o código promocional de acesso para o cliente PORTO RENT A CAR pode ser utilizado por até 30 (TRINTA) dias a partir da data da retirada do veiculo, quantas vezes quiser.<br /><br />
              <span>  Programa não cumulativo: o cliente não poderá utilizar mais de uma vez no mesmo parceiro ou nem agregar este programa a qualquer outro tipo de benefício ou desconto oferecido no estabelecimento conveniado.</span>  <br /><br />
                Sujeito à disponibilidade de serviço ou produto nos estabelecimentos participantes do programa.</p>
        </div>
                </div>
            </div>
                <Footer />
        </div>

    )
}

export default RegulationPage;