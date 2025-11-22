import "./looks.scss";
import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.png";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

export function Looks() {
    return (
        <section id="looks" className="looks">
            <h2 className="looks__title">LOOKS E DICAS DE MAQUIAGEM</h2>

            <div className="looks__cards">
                <div className="looks__card">
                    <img className="looks__image" src={labios} alt="Lábios" />
                </div>
                <div className="looks__card">
                    <img className="looks__image" src={olhos} alt="Olhos" />
                </div>
                <div className="looks__card">
                    <img className="looks__image" src={rosto} alt="Rosto" />
                </div>
                <div className="looks__card">
                    <img
                        className="looks__image"
                        src={tendencia}
                        alt="Tendências"
                    />
                </div>
            </div>
        </section>
    );
}
