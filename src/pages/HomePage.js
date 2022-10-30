import React from "react";
import "../styles/components/pages/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
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
            siempre y un amor sin fin. Que podria ser mas perfecto? Es asombrosa
            la cantidad de perros que necesitan exactamente lo que tienes para
            ofrecer... ¡Lo único que queda por hacer es ponerse a buscar!
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
  );
};

export default HomePage;
