import './Main.css'
import imgprof from '../../Assets/profile.jpeg'

const PICTURE = imgprof;

const COVERLETTER = 'http://localhost:5173/Desenv.Blockchain.pdf';

const Main = () => {

  const downloadFile = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

    return (
      <>  
        <main className='main'>
          <div className='profile'>    
            <h1 className='title'>Olá, Bem-vindo(a)!🖐Sou <span className='myname'>Laíse Vieira Alves</span></h1>
             
            <h2>Desenvolvedora <span className='block'> Blockchain</span></h2> 

            <p>Apaixonada por tecnologia, principalmente aquelas que <br /> envolvem o mercado de Blockchain, como: DEFI, NFT, <br /> DAOS, Cryptos e etc.</p>

            <button onClick={() =>{downloadFile(COVERLETTER)}}> &#129139; Download CV</button>
          </div>

          <div className='profile-img'>
            <img src={PICTURE} alt="profile" />
          </div>
        </main>    
       
      </>  
    )
  }
  
  export default Main