import './Main.css'
import imgprof from '../../Assets/profile.jpeg'
import curriculo from '../../Assets/desenvblockchain.pdf'

const PICTURE = imgprof;
const COVERLETTER = curriculo;

const Main = () => {

  const handleDownload = () => {
   
    const PDFFILEPATH = COVERLETTER;

    const link = document.createElement('a');
    link.href = PDFFILEPATH;
    link.download = 'desenvblockchain.pdf';
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