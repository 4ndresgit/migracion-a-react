import React from "react";
import "../../../styles/components/layout/Header.css";
import { Link, Outlet } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <header className="hero">
        <nav className="nav container">
          <div className="nav__logo">
            <h1 className="nav__title">Encuentra tu Mascota!</h1>
          </div>

          <ul className="nav__link nav__link-menu">
            <li className="nav__items">
              <Link to="./HomePage" className="nav__links">
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link to="./NosotrosPage" className="nav__links">
                Nosotros
              </Link>
            </li>
            <li className="nav__items">
              <Link to="./GaleriaPage" className="nav__links">
                Galeria
              </Link>
            </li>
            <li className="nav__items">
              <Link to="./ContactoPage" className="nav__links">
                Contacto
              </Link>
            </li>
            <img
              src="img/home/close.svg"
              alt="cierre nav"
              className="nav__close"
            />
          </ul>

          <div className="nav__menu">
            <img src="img/home/menu.svg" alt="menu" className="nav__img" />
          </div>
        </nav>

        <section className="hero__container container">
          <h1 className="hero__title">Acá está tu fiel compañero</h1>
          <p className="hero__paragraph">
            Estas a un paso de encontrar al nuevo integrante de tu familia
          </p>
          <Link to="./ServiciosPage" className="cta">
            Vamos!
          </Link>
        </section>
      </header>
    </div>
  );
};

export default Header;
