import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/layout/Header.css";

const Header = (props) => {
  return (
    <header className="hero">
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
    </header>
  );
};

export default Header;
