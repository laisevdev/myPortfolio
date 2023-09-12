import './App.css';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Section from '../Section/Section'
import Projects from '../Projects/Project';
import Footer from '../Footer/Footer';
import { motion } from "framer-motion"


const App = () => {
  return (
    <>
      <Navbar/>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.1, delay: 0.3 }}
          className='framer-motion'
        >
            <div className='framer-motion'>
              <Main />
              <Section />
              <Projects />
            </div>
          <Footer /> 
        </motion.div>       
    </>
    
  );
};

export default App