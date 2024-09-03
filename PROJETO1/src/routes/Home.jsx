import { HomeStyle } from "../css/HomeStyle"
import imgHome from '../assets/img-home.jpg'

const Home=()=>{
    return(
        <HomeStyle>
            <img src={imgHome} alt="Homem levantando barra" id="Img-fundo"/>
        </HomeStyle>
    )
}

export default Home