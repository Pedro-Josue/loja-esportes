import { HomeStyle } from "../css/HomeStyle"
import imgHome from '../assets/img-home.jpg'
import futIcon from '../assets/futIcon.svg'
import basqueteIcon from '../assets/basqueteIcon.svg' 
import voleiIcon from '../assets/voleiIcon.svg'
import corredorIcon from '../assets/corredorIcon.svg'

const Home=()=>{
    return(
        <HomeStyle>
            <div className="home">
                <h1>O esporte que você ama, do jeito que você precisa.</h1>
                <h3>Encontre as melhores ofertas de produtos e equipamentos esportivos com frete grátis para todo o Brasil!</h3>
                <div className="btn-home">
                    <button>Crie uma conta</button>
                    <button>Entrar</button>
                </div>
                <div className="icons">
                    <div className="icon-wrapper">
                        <img src={futIcon} alt="icone bola de futebol" />
                        <div className="icon-texto">Futebol</div>
                    </div>
                    <div className="icon-wrapper">
                        <img src={basqueteIcon} alt="icone bola de basquete" />
                        <div className="icon-texto">Basquete</div>
                    </div>
                    <div className="icon-wrapper">
                        <img src={voleiIcon} alt="icone bola de volei" />
                        <div className="icon-texto">Vôlei</div>
                    </div>
                    <div className="icon-wrapper">
                        <img src={corredorIcon} alt="icone de corredor" />
                        <div className="icon-texto">Corrida</div>
                    </div>
                </div>
                <img src={imgHome} alt="Homem levantando barra" id="img-fundo"/>
            </div>
        </HomeStyle>
    )
}

export default Home