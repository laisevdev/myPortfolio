import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import './Menu.css';

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar-mobile">
      <div className="open-mobile" onClick={toggleMenu}>
        {menuOpen ? <IoCloseSharp color="white" size="26px"/> : <TiThMenu color="white" size="35px"/>}
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <div className="close-mobile" onClick={toggleMenu}>
            <IoCloseSharp color="white" size="26px"/>
          </div>
          <ul onClick={toggleMenu}>
            <li>
              <a href="#sobremim" onClick={toggleMenu}>Sobre Mim</a>
            </li>
            <li>
              <a href="#projetos" onClick={toggleMenu}>Projetos</a>
            </li>
            <li className="contato">
              <a href="#contato" onClick={toggleMenu}>Contato</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MenuMobile;

