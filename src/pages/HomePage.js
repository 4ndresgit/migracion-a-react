import React from "react";
import "../styles/components/pages/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div>
      <header className="hero">
        <nav className="nav container">
          <div className="nav__logo">
            <h1 className="nav__title">Encuentra tu Mascota!</h1>
          </div>

          <ul className="nav__link nav__link-menu">
            <li className="nav__items">
              <Link to="/HomePage" className="nav__links">
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/Nosotros" className="nav__links">
                Nosotros
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/Galeria" className="nav__links">
                Galeria
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/Contacto" className="nav__links">
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
      </header>

      <section className="hero__container container">
        <h1 className="hero__title">Encuentra tu fiel compañero</h1>
        <p className="hero__paragraph">
          Estas a un paso de encontrar al nuevo integrante de tu familia
        </p>
        <Link to="./ServiciosPage" className="cta">
          Vamos!
        </Link>
      </section>

      <section className="knowledge">
        <div className="knowledge__container container">
          <div className="knowledge__texts">
            <h2 className="subtitle">Fijate en algo...</h2>
            <p className="knowledge__paragraph">
              Ya sea que solo estés buscando o que estés listo para adoptar,
              estamos aquí para brindar la información necesaria para que los
              adoptantes ayuden a sus mascotas a adaptarse a la vida en su nuevo
              hogar. Estás en busca de un nuevo miembro de la familia y un mejor
              amigo. Los perros que vas a ver están en busca de un hogar para
              siempre y un amor sin fin. Que podria ser mas perfecto? Es
              asombrosa la cantidad de perros que necesitan exactamente lo que
              tienes para ofrecer... ¡Lo único que queda por hacer es ponerse a
              buscar!
            </p>
            <Link to="ServiciosPage" className="cta">
              Que esperas para conocer mas!
            </Link>
          </div>
          <img
            src="./img/Home/home2.jpg"
            alt="imagen home"
            className="knowledge__img"
          />
        </div>
      </section>

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
    </div>
  );
};

export default HomePage;
