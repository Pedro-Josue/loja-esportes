import { ProdutosStyle } from "../css/ProdutosStyle"
import corda from "../assets/corda.png"
import halter from "../assets/halter.png"
import tenis from "../assets/tenis.png"
import tabela from "../assets/tabela.png"

const Produtos=()=>{
    return(
        <ProdutosStyle>
        
        
            <h1 id="h1_categorias"> Navegue por categorias</h1>
            <div className="categorias">
                <div className="card">
                    <img src={halter} className="card_img" />
                    <h4>Halteres 10KG</h4>
                </div>
                <div className="card">
                    <img src={corda} className="card_img"  />
                    <h4>Corda</h4>
                </div>
                <div className="card">
                    <img src={tenis} className="card_img"  />
                    <h4>Tenis</h4>
                </div>
                <div className="card">
                    <img src={tabela} className="card_img" />
                    <h4>Acess</h4>
                </div>
            </div>
       

        </ProdutosStyle>
    )
}

export default Produtos