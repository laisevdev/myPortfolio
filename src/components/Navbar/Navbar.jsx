import "./Navbar.css";
import imglogo from "../../Assets/Logotipo.jpg";
import "./Responsive.css";

const logo = imglogo;

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logotipo">
          <img className="image" src={logo} alt="Logotipo" />
        </div>

        <label className="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="menu">
          <li>
            <a href="#sobremim">Inicio</a>
          </li>
          <li>
            <a href="#sobremim">Sobre Mim</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>

          <li>
            <a href="#formacao">Formação</a>
          </li>
          <li className="contato">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
