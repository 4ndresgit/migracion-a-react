import React from "react";
import "./../styles/components/pages/GaleriaPage.css";
import { Link } from "react-router-dom";

const GaleriaPage = (props) => {
  return (
    <div>
      <body>
        <nav className="nav container">
          <div className="nav__logo">
            <h1 className="nav__title">Encuentra tu Mascota!</h1>
          </div>
          <ul className="nav__link nav__link-menu">
            <li className="nav__items">
              <Link to="/HomePage" className="nav__links-top">
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/Nosotros" className="nav__links-top">
                Nosotros
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/Galeria" className="nav__links-top">
                Galeria
              </Link>
            </li>
            <li className="nav__items">
              <Link to="/Contacto" className="nav__links-top">
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
        <section className="section">
          <h1 className="title">
            Por acá está tu nueva mascota...vas a elejir bien!
          </h1>

          <div className="container">
            <div className="card">
              <img src="img/galeria/perro01.jpeg" alt="Perro Nala" />
              <h4>Nala</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro02.jpeg" alt="Perro Simon" />
              <h4>Simon</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro03.jpeg" alt="Perro Juana" />
              <h4>Juana</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro04.jpeg" alt="Perro Princesa" />
              <h4>Princesa</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro05.jpeg" alt="Perro Koda" />
              <h4>Koda</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro06.jpeg" alt="Perro Luna" />
              <h4>Luna</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro07.jpeg" alt="Perro Lucas" />
              <h4>Lucas</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro08.jpeg" alt="Perro Lazaro" />
              <h4>Lazaro</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro09.jpeg" alt="Perro Babita" />
              <h4>Barbita</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro10.jpeg" alt="Perro Lovi" />
              <h4>Lovi</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
            <div className="card">
              <img src="img/galeria/perro11.jpeg" alt="Perro Caty" />
              <h4>Caty</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                excepturi unde?
              </p>
              <Link to="#">Leer más</Link>
            </div>
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
      </body>
    </div>
  );
};

export default GaleriaPage;
