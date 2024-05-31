import './Footer.css'
import imglinkedin from '../../Assets/linkedin.png'
import imggithub from '../../Assets/giticon.png'

import InView from '../UseInView/InView';
import './Responsive.css'

const LINKEDIN = imglinkedin;
const GITHUB = imggithub;
const TELEGRAM_LINK = 'https://t.me/laisev';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/laisevdev/';
const GITHUB_LINK = 'https://github.com/laisevdev';


const Footer = () => {
  return (
    <>
      <InView>
        <section className='footer'>
          <div className='titlefooter'>
            <h1>Entre em contato</h1>
            <p>Estou sempre aberta para conversar, então não hesite em entrar em contato comigo.</p>
          </div>
        
          <div className='chatme'>
              <a href={TELEGRAM_LINK} target='blank_' rel="noopener noreferrer">
                <button>Diga Olá</button>
              </a>                     
          </div>

          <div className='social'>
          <h2>
            © Laíse Alves 2023
          </h2>
          <ul>
            <li>
              <a href={LINKEDIN_LINK}  target='blank_'> 
                <img src={LINKEDIN}alt="LINKEDIN" />
              </a>
            </li> 
            <li>
              <a href={GITHUB_LINK}  target='blank_'>
                <img src={GITHUB} alt="GITHUB" />
              </a>
            </li>          
          </ul>
          </div>
        </section>
      </InView>
    </>
  )
}

export default Footer