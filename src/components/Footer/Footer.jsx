import './Footer.css'
import imglinkedin from '../../Assets/linkedin.png'
import imggithub from '../../Assets/github.png'

const LINKEDIN = imglinkedin;
const GITHUB = imggithub;

const Footer = () => {
  return (
    <>
        <section className='footer'>
          <h1>Entre em contato</h1>
          <p>Estou sempre aberta para conversar, então não hesite em entrar em contato comigo</p>
          
          <ul className='chatme'>
            <li>
              <a href="">Diga Olá</a>
            </li>            
          </ul>

          <div className='social'>
          <ul>
            <li>
              <a href="">
                <img src={LINKEDIN}alt="" />
              </a>
            </li> 
            <li>
              <a href="">
                <img src={GITHUB} alt="" />
              </a>
            </li>          
          </ul>
          </div>
          <h2>
            ©Laíse Alves 2023
          </h2>
        </section>
    </>
  )
}

export default Footer