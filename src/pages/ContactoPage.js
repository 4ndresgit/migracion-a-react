import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
  return (
    <div>
      <form className="form">
        <h2 className="form__title">Inicia Sesión</h2>
        <p className="form__paragraph">
          ¿Aún no tienes una cuenta?{" "}
          <Link to="#" className="form__link">
            Entra aquí
          </Link>
        </p>

        <div className="form__container">
          <div className="form__group">
            <input
              type="text"
              id="name"
              className="form__input"
              placeholder=" "
            />
            <label for="name" className="form__label">
              Nombre:
            </label>
            <span className="form__line"></span>
          </div>
          <div className="form__group">
            <input
              type="text"
              id="user"
              className="form__input"
              placeholder=" "
            />
            <label for="user" className="form__label">
              Usuario:
            </label>
            <span className="form__line"></span>
          </div>
          <div className="form__group">
            <input
              type="text"
              id="password"
              className="form__input"
              placeholder=" "
            />
            <label for="password" className="form__label">
              Contraseña:
            </label>
            <span className="form__line"></span>
          </div>

          <input type="submit" className="form__submit" value="Entrar" />
        </div>
      </form>

      <footer className="footer">
        <section className="footer__container container">
          <nav className="nav nav--footer">
            <h2 className="footer__title">Encuentra tu mascota!</h2>

            <ul className="nav__link nav__link--footer">
              <li className="nav__items">
                <Link to="/HomePage" className="nav__links" />
              </li>
              <li className="nav__items">
                <Link to="/NosotrosPage" className="nav__links" />
              </li>
              <li className="nav__items">
                <Link to="/GaleriaPage" className="nav__links" />
              </li>
              <li className="nav__items">
                <Link to="/ContactoPage" className="nav__links" />
              </li>
            </ul>
          </nav>

          <form
            className="footer__form"
            action="https://formspree.io/f/mknkkrkj"
            method="POST"
          >
            <h2 className="footer__newsletter">Suscribete a la Newsletter</h2>
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
            <Link to="https://youtube.com" className="footer__icons" />
            <img
              src="./img/contacto/youtube.svg"
              className="footer__img"
              alt="Logo Youtube"
            />
          </div>

          <h3 className="footer__copyright">
            Derechos reservados &copy; Andres Rossi
          </h3>
        </section>
      </footer>
    </div>
  );
};

export default ContactoPage;
