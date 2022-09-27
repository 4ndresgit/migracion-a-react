import React from "react";
import '../../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
       <header className="hero">
      <nav className="nav container">
        <div className="nav__logo">
          <h1 className="nav__title">Encuentra tu Mascota!</h1>
        </div>

        <ul className="nav__link nav__link-menu">
          <li className="nav__items">
            <a href="index.html" className="nav__links">Home</a>
          </li>
          <li className="nav__items">
            <a href="nosotros.html" className="nav__links">Nosotros</a>
          </li>
          <li className="nav__items">
            <a href="galeria.html" className="nav__links">Galeria</a>
          </li>
          <li className="nav__items">
            <a href="contacto.html" className="nav__links">Contacto</a>
          </li>
          <img src="img/home/close.svg" alt="cierre nav" className="nav__close" />
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
        <a href="servicios.html" className="cta">Vamos!</a>
      </section>
    </header>
    );
}

export default Header;