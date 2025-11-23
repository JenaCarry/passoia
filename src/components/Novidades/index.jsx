import "./novidades.scss";
import novidadesBanner from "../../assets/novidades-banner.png";

export function Novidades() {
    return (
        <section id="novidades" className="novidades">
            <h2 className="title">NOVIDADES PARA VOCÊ</h2>
            <img
                className="novidades__image"
                src={novidadesBanner}
                alt="Banner novidades"
            />
        </section>
    );
}
