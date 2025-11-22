import { useState } from "react";
import azul from "../../assets/azul.png";
import vermelho from "../../assets/vermelho.png";
import marrom from "../../assets/marrom.png";
import base from "../../assets/base.png";
import glossAberto from "../../assets/gloss-aberto.png";
import kitGloss from "../../assets/kit-gloss.png";
import kitBastao from "../../assets/kit-bastao.png";
import fiveStars from "../../assets/five-stars.png";
import "./lancamentos.scss";

export function Lancamentos() {
    const [color, setColor] = useState(azul);

    return (
        <section id="lancamentos" className="lancamentos">
            <h2 className="lancamentos__title">APROVEITE OS LANÇAMENTOS</h2>

            <div className="lancamentos__left">
                <img
                    className="lancamentos__left-image"
                    src={glossAberto}
                    alt="Gloss aberto"
                />
                <img
                    className="lancamentos__left-image"
                    src={kitGloss}
                    alt="Gloss gloss"
                />
                <img
                    className="lancamentos__left-image"
                    src={kitBastao}
                    alt="Gloss bastão"
                />
            </div>

            <div className="lancamentos__center">
                <img
                    className="lancamentos__center-image"
                    src={color}
                    alt="Baton"
                />
            </div>

            <div className="lancamentos__right">
                <div>
                    <img src={fiveStars} alt="Five Stars" />
                    <h3 className="lancamentos__subtitle">Matte Premium</h3>
                </div>

                <div className="lancamentos__opcoes">
                    <span>Cores disponíveis</span>
                    <div className="lancamentos__cores">
                        <button
                            onClick={() => setColor(azul)}
                            className="lancamentos__circle azul"
                        ></button>
                        <button
                            onClick={() => setColor(vermelho)}
                            className="lancamentos__circle vermelho"
                        ></button>
                        <button
                            onClick={() => setColor(marrom)}
                            className="lancamentos__circle marrom"
                        ></button>
                        <button
                            onClick={() => setColor(base)}
                            className="lancamentos__circle base"
                        ></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
