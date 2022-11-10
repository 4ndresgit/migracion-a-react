import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <section className="footer__container container">
        <nav className="nav nav--footer">
          <h2 className="footer__title">Encuentra tu mascota!</h2>
          <ul className="nav__link nav__link--footer">
            <li className="nav__items">
              <Link to="/HomePage" className="nav__links">
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/NosotrosPage" className="nav__links">
                Nosotros
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/GaleriaPage" className="nav__links">
                Galeria
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/ContactoPage" className="nav__links">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <form
          className="footer__form"
          action="https://formspree.io/f/mknkkrkj"
          method="POST"
        >
          <h2 className="footer__newsletter">Suscribete a la newsletter</h2>
          <div className="footer__inputs">
            <input
              type="email"
              placeholder="Email:"
              className="footer__input"
              name="_replyto"
            />
            <input
              type="submit"
              value="Registrate"
              className="footer__submit"
            />
          </div>
        </form>
      </section>

      <section className="footer__copy container">
        <div className="footer__social">
          <Link to="https://youtube.com" className="footer__icons" />
          <img
            src="./img/contacto/youtube.svg"
            className="footer__img"
            alt="Logo Youtube"
          />
          <Link to="https://facebook.com" className="footer__icons" />
          <img
            src="./img/contacto/facebook.svg"
            className="footer__img"
            alt="Logo Facebook"
          />
          <Link to="https://google.com" className="footer__icons" />
          <img
            src="./img/contacto/google.svg"
            className="footer__img"
            alt="Logo Google"
          />
        </div>

        <h3 className="footer__copyright">
          Derechos reservados &copy; Andres Rossi
        </h3>
      </section>
    </footer>
  );
};

export default Footer;
