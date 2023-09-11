import './Footer.css'
import imglinkedin from '../../Assets/linkedin.png'
import imggithub from '../../Assets/giticon.png'

const LINKEDIN = imglinkedin;
const GITHUB = imggithub;

const Footer = () => {
  return (
    <>
        <section className='footer'>
          <div className='titlefooter'>
            <h1>Entre em contato</h1>
            <p>Estou sempre aberta para conversar, então não hesite em entrar em contato comigo.</p>
          </div>
        
          <ul className='chatme'>
            <li>
              <a href="https://t.me/laisev" target='blank_'>Diga Olá</a>
            </li>            
          </ul>

          <div className='social'>
          <h2>
            © Laíse Alves 2023
          </h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/laisevdev/"  target='blank_'> 
                <img src={LINKEDIN}alt="LINKEDIN" />
              </a>
            </li> 
            <li>
              <a href="https://github.com/laisevdev"  target='blank_'>
                <img src={GITHUB} alt="GITHUB" />
              </a>
            </li>          
          </ul>
          </div>
        </section>
    </>
  )
}

export default Footer