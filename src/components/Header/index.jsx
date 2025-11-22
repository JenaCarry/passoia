import "./header.scss";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon-hamburger.png";

export function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="header__logo" src={logo} alt="Logo Passoia" />
            </a>

            <img className="header__icon" src={icon} alt="Icon Hamburger" />

            <ul className="header__list">
                <li className="header__item">
                    <a className="header__link" href="#looks">
                        LOOKS
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#lancamentos">
                        LANÇAMENTOS
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="#">
                        NOVIDADES
                    </a>
                </li>
            </ul>
        </header>
    );
}
