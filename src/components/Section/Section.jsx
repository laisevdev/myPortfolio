import './Section.css';
import InView from '../UseInView/InView';
import './Responsive.css'

const Section = ()  => {
  
  
  return (
    <> 
    <InView>
    <section className='section'>
    
      <section className="aboutme">

        <h1>Prazer em te conhecer!</h1>

        <p>
          Me chamo <span className='name'>Laíse</span>, brasileira natural do Mato Grosso, entusiasta e apaixonada pela <span className='blocktech'>tecnologia Blockchain</span> (Criptomoedas, NFT, DEFI e Web3). Tenho acompanhado o desenvolvimento desse ecossistema desde inicio de 2021.
        </p>
        <p>
          Me considero uma pessoa <span className='skillsmain'>observadora, focada, resiliente</span> e com habilidades em aprender rápido e fácil. 
          Meu objetivo é <span className='toolsbuild'>construir ferramentas e recursos</span> que irão melhorar a vida das pessoas no presente e no futuro utilizando <span className='decentralizedtech'>tecnologias descentralizadas</span> e me tornar uma especialista nesta área.
        </p>
        <p>
          Estou muito animada para <span className='learnmore'>aprender e evoluir </span>cada dia mais, adoro colaborar e fazer conexões, especialmente tomando um café. Fique à vontade para entrar em contato comigo.
        </p>
      </section>

      <section
       className="skills"        
      >
        <h1>
          Minhas Habilidades
        </h1>
        <h2>
          Algumas habilidades e tecnologias no qual tenho trabalhado recentemente:
        </h2>
        <ul className='abilities'>
          <li>
            Solidity
          </li>
          <li>
            JavaScript
          </li>
          <li>
            EthersJS
          </li>
          <li>
            Hardhat
          </li>
          <li>
            ReactJS
          </li>
          <li>
            Metamask
          </li>
          <li>
            Biblioteca Openzeppelin
          </li>
          <li>
            ERC-721
          </li>
          <li>
            ERC-20
          </li>
          <li>
            ERC-1155
          </li>
          <li>
            RemixIDE
          </li>
          <li>
            IPFS
          </li>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            Leonardo Int.Artificial
          </li>
        </ul>
      </section> 
      </section>  
      </InView> 
    </>
  )
}

export default Section