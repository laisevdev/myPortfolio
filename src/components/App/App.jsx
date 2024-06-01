import "./App.css";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Section from "../Section/Section";
import Projects from "../Projects/Project";
import Footer from "../Footer/Footer";
import MenuMobile from "../MobileMenu/Menu";


const App = () => {
  return (
    <>
      <div className="style-mobile">
        <MenuMobile />
      </div>
      <Navbar />
      <Main />
      <Section />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
