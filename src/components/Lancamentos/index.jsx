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
            <h2 className="title">APROVEITE OS LANÇAMENTOS</h2>

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
                <div className="lancamentos__header">
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

                <div className="lancamentos__description">
                    <h4 className="lancamentos__description-title">
                        Descrição
                    </h4>
                    <p className="lancamentos__description-text">
                        O Batom Matte possui uma fórmula inovadora desenvolvida
                        para entregar o máximo de cor na primeira aplicação com
                        um deslize suave e macio. Tem acabamento matte aveludado
                        e manteiga de manga que ajuda a hidratar e a proteger os
                        lábios contra ressecamento. Ajuda na hidratação dos
                        lábios, textura fina e macia que não pesa nos lábios.
                    </p>
                </div>
            </div>
        </section>
    );
}
