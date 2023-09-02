import './Footer.css'


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
                <img src="" alt="" />
              </a>
            </li> 
            <li>
              <a href="">
                <img src="" alt="" />
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