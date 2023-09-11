import './Main.css'
import imgprof from '../../Assets/profile.jpeg'
import curriculo from '../../Assets/desenvblockchain.pdf'

const PICTURE = imgprof;
const COVERLETTER = curriculo;

const Main = () => {

  const handleDownload = () => {
    // Substitua 'exemplo.pdf' pelo caminho correto para o seu arquivo PDF.
    const PDFFILEPATH = COVERLETTER;

    // Crie um elemento 'a' para simular o clique e iniciar o download.
    const link = document.createElement('a');
    link.href = PDFFILEPATH;
    link.download = 'desenvblockchain.pdf'; // Nome que o arquivo terá ao ser baixado
    link.click();
  };

    return (
      <>  
        <main className='main'>
          <div className='profile'>    
            <h1 className='title'>Olá, Bem-vindo(a)!🖐Sou <span className='myname'>Laíse Vieira Alves</span></h1>
             
            <h2>Desenvolvedora <span className='block'> Blockchain</span></h2> 

            <p>Apaixonada por tecnologia, principalmente aquelas que <br /> envolvem o mercado de Blockchain, como: DEFI, NFT, <br /> DAOS, Cryptos e etc.</p>

            <button onClick={handleDownload}> &#129139; Download CV</button>
          </div>

          <div className='profile-img'>
            <img src={PICTURE} alt="profile" />
          </div>
        </main>    
       
      </>  
    )
  }
  
  export default Main