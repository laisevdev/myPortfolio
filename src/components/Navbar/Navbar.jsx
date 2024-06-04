import "./Navbar.css";
import imglogo from "../../Assets/Logotipo.jpg";
import "./Responsive.css";

const Navbar = () => {
    const logo = imglogo;

    const navBarLinks = [
        { name: "Início", link: "#inicio" },
        { name: "Sobre mim", link: "#sobremim" },
        { name: "Projetos", link: "#projetos" },
      /*  { name: "Formação", link: "#formacao" }, */
        { name: "Contato", link: "#contato" },
    ];

    return (
        <>
            <nav className="navbar">
                <div className="logotipo">
                    <img className="image" src={logo} alt="Logotipo" />
                </div>

                <ul className="menu">
                    {navBarLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
