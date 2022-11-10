import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/nosotros">NosotrosPage</Link>
          </li>
          <li>
            <Link to="/galeria">GaleriaPage</Link>
          </li>
          <li>
            <Link to="/contacto">ContactoPage</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
