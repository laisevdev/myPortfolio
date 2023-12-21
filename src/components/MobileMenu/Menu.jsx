import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import './Menu.css'

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && !menuOpen) {
      setMenuOpen(false);
    }
    if (window.innerWidth < 426 && menuOpen) {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>

    <nav className="navbar-mobile">
      <div className="open-mobile" onClick={toggleMenu}>
            {menuOpen ? <IoCloseSharp color="white"/> : <TiThMenu color="white"/>}
      </div>
    
        <nav className="mobile">
        {menuOpen ?
          <ul>
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
              <a href="#formacao">Cursos</a>
            </li>
            <li className="contato">
              <a href="#contato">Contato</a>
            </li>
          </ul> 
           : <></>}
        </nav>
    </nav>

    </>
  );
};

export default MenuMobile;
