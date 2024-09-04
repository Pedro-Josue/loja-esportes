import { HomeStyle } from "../css/HomeStyle"
import imgHome from '../assets/img-home.jpg'

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
                <img src={imgHome} alt="Homem levantando barra" id="img-fundo"/>
            </div>
        </HomeStyle>
    )
}

export default Home