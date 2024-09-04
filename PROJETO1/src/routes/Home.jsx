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
                    <img src={futIcon} alt="icone bola de futebol" />
                    <img src={basqueteIcon} alt="icone bola de basquete" />
                    <img src={voleiIcon} alt="icone bola de volei" />
                    <img src={corredorIcon} alt="icone de corredor" />
                </div>
                <img src={imgHome} alt="Homem levantando barra" id="img-fundo"/>
            </div>
        </HomeStyle>
    )
}

export default Home