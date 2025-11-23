import "./footer.scss";
import masterCard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__card footer__atendimento">
                    <h2 className="title-footer">ATENDIMENTO</h2>
                    <div className="footer__list-column">
                        <a href="#">Fale Conosco</a>
                        <a href="#">Perguntas Frequentes</a>
                        <a href="#">Meus Pedidos</a>
                        <a href="#">Nossas Lojas</a>
                    </div>
                </div>
                <div className="footer__card footer__pagamento">
                    <h2 className="title-footer">FORMAS DE PAGAMENTO</h2>
                    <div className="footer__list-row">
                        <img src={masterCard} alt="MasterCard" />
                        <img src={visa} alt="Visa" />
                        <img src={pix} alt="Pix" />
                        <img src={boleto} alt="Boleto" />
                    </div>
                </div>
                <div className="footer__card footer__sociais">
                    <h2 className="title-footer">SIGA-NOS NAS REDES SOCIAIS</h2>
                    <div className="footer__list-row">
                        <a href="#">
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={youtube} alt="YouTube" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
