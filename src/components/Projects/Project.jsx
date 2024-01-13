import "./Project.css";
import imgdapp from "../../Assets/dapp_nft.png";
import imgsolpower from "../../Assets/solpower_app.png";
import imgjs from "../../Assets/js.png";
import imgsol from "../../Assets/ethereum.png";
import imghtml from "../../Assets/html5.png";
import imgcss from "../../Assets/css3.png";
import imgreactjs from "../../Assets/reactjs.png";
import imghardhat from "../../Assets/hardhat.png";
import imgethproj from "../../Assets/eth-proj.png";

import InView from "../UseInView/InView";
import "./Responsive.css";

const NFT_MINT = imgdapp;
const ETHPROJ = imgethproj;
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
        <div id="projetos">
            <InView>
                <section className="container-project">
                    <div className="titleproj">
                        <h1>Projetos</h1>
                        <p>
                            Aqui estão alguns projetos nos quais eu construí ao
                            longo da minha jornada.
                        </p>
                    </div>

                    <section className="projects ">
                        <div className="card">
                            <div className="loader"></div>
                            <div className="description">
                                <h1>Em Desenvolvimento</h1>
                                <p>
                                    Projeto de aplicativo descentralizado onde
                                    será utilizado Padrão Token ERC-1155 da
                                    Ethereum Network.
                                </p>
                            </div>
                            <div className="technologies">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img
                                                src={SOLIDITY}
                                                alt="Solidity"
                                            />
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
                        <div className="card">
                            <a href="">
                                <img src={NFT_MINT} alt="NFTMint" />
                            </a>
                            <div className="description">
                                <h1>NFTNoob- NFT Collection</h1>
                                <p>
                                    Aplicativo descentralizado para mint de
                                    Non-Fungible-Tokens(NFT).
                                </p>
                            </div>
                            <div className="technologies">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img
                                                src={SOLIDITY}
                                                alt="Solidity"
                                            />
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
                            <li>
                                <a
                                    href="https://dappnftnoob.on.fleek.co/"
                                    target="blank_"
                                >
                                    🌐 Visite o site
                                </a>
                            </li>
                        </div>

                        <div className="card">
                            <a href="">
                                <img src={ETHPROJ} alt="SolPower" />
                            </a>
                            <div className="description">
                                <h1>ERC-1155</h1>
                                <p>
                                    Contrato Inteligente Padrão ERC-1155
                                    implantado na rede Polygon.
                                </p>
                            </div>
                            <div className="technologies">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img
                                                src={SOLIDITY}
                                                alt="Solidity"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={HARDHAT} alt="HARDHAT" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <li>
                                <a
                                    href="https://github.com/laisevdev/BasicERC1155"
                                    target="blank_"
                                >
                                    🌐 Visite o projeto
                                </a>
                            </li>
                        </div>

                        <div className="card">
                            <a href="">
                                <img src={SOLPOWER} alt="SolPower" />
                            </a>
                            <div className="description">
                                <h1>SolPower</h1>
                                <p>
                                    Aplicativo descentralizado para mint de
                                    Non-Fungible-Tokens(NFT).
                                </p>
                            </div>
                            <div className="technologies">
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
                                        <a href="#" alt="CSS3">
                                            <img src={CSS_} alt="CSS3" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <li>
                                <a
                                    href="https://solpower.netlify.app/"
                                    target="blank_"
                                >
                                    🌐 Visite o site
                                </a>
                            </li>
                        </div>
                    </section>
                </section>
            </InView>
        </div>
    );
};

export default Project;
