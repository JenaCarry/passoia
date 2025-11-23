import "./header.scss";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon-hamburger.png";
import { useEffect, useRef, useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const iconRef = useRef(null);
    const menuRef = useRef(null);

    function handleOpen() {
        setIsOpen((prev) => !prev);
    }

    function handleClick() {
        if (
            iconRef.current &&
            !iconRef.current.contains(event.target) &&
            menuRef.current &&
            !menuRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <header className="header">
            <a href="/">
                <img className="header__logo" src={logo} alt="Logo Passoia" />
            </a>

            <button onClick={handleOpen} className="header__icon" ref={iconRef}>
                <img src={icon} alt="Icon Hamburger" />
            </button>

            <nav
                className={`header__menu ${isOpen ? "open" : ""}`}
                ref={menuRef}
            >
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
                        <a className="header__link" href="#novidades">
                            NOVIDADES
                        </a>
                    </li>
                </ul>
            </nav>

            <nav className="header__nav">
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
                        <a className="header__link" href="#novidades">
                            NOVIDADES
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
