import './Project.css'
import imgdapp from '../../Assets/dapp_nft.png'
import imgsolpower from '../../Assets/solpower_app.png'
import imgjs from '../../Assets/js.png'
import imgsol from '../../Assets/ethereum.png'
import imghtml from '../../Assets/html5.png'
import imgcss from '../../Assets/css3.png'
import imgreactjs from '../../Assets/reactjs.png'
import imghardhat from '../../Assets/hardhat.png'

 
const NFT_MINT = imgdapp;
const SOLPOWER = imgsolpower;

/*TECHNOLOGIES  */

const JS_ = imgjs;
const SOLIDITY = imgsol;
const HTML_ = imghtml;
const CSS_ = imgcss;
const REACT_ = imgreactjs;
const HARDHAT = imghardhat;



const Project = () => {
  return (
    <>
        <section className='projects'>

            <div className='card'>
                <a href="">
                    <img src={NFT_MINT} alt="NFTMint" />
                </a>
                <div className='description'>
                    <h1>
                        NFTNoob- NFT Collection
                    </h1>
                    <p>
                        Aplicativo descentralizado para mint de Non-Fungible-Tokens(NFT).
                    </p>
                </div>
                <div className='technologies'>
                    <ul>
                        <li>
                            <a href="">
                                <img src={SOLIDITY} alt="Solidity" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={JS_} alt="JavaScript" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={REACT_} alt="ReactJS" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={HARDHAT} alt="Hardhat" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={HTML_} alt="HTML5" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={CSS_} alt="CSS3" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card'>
                <a href="">
                    <img src={SOLPOWER} alt="SolPower" />
                </a>
                <div className='description'>
                    <h1>
                        SolPower
                    </h1>
                    <p>
                        Aplicativo descentralizado para mint de Non-Fungible-Tokens(NFT).
                    </p>
                </div>
                <div className='technologies'>
                    <ul>
                        <li>
                            <a href="">
                                <img src={JS_} alt="JavaScript" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={HTML_} alt="HTML5" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={CSS_} alt="CSS3" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            
        </section>
    </>
  )
}

export default Project