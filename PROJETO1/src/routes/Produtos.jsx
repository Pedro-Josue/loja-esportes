import { ProdutosStyle } from "../css/ProdutosStyle"
import corda from "../assets/corda.png"
import halter from "../assets/halter.png"
import tenis from "../assets/tenis.png"
import raquete from "../assets/raquete.jpg"
import bola from "../assets/bola.png"
import handgrip from "../assets/handgrip.jpg"

const Produtos=()=>{
    return(
        <ProdutosStyle>
        

        <h1 id="h1_categorias"> Encontre o Produto que deseja.</h1>

        <div className="container_principal">
                <div class="container">
                    <div class="card">
                        <img src={corda} alt="" />
                        <h3>Corda De Pular Profissional Speed Rope 3m - Nybc</h3>
                        <p className="price">R$ 49,99</p>
                        <p className="installments">10x R$ 129,99</p>
                        <p className="brand">NYBC</p>
                    </div>
                    <div class="card">
                        <img src={halter} alt="" />
                        <h3>Kit Halter + Peso para treinar</h3>
                        <p className="price">R$ 199,99</p>
                        <p className="installments">10x R$ 20,99</p>
                        <p className="brand">CYBERGYM</p>
                    </div>
                    <div class="card">
                        <img src={tenis} alt="" />
                        <h3>TÊNIS NIKE ESPORTIVO MASCULINO</h3>
                        <p className="price">R$ 349,99</p>
                        <p className="installments">10x R$ 34,99</p>
                        <p className="brand">NIKE</p>
                    </div>
                </div>

                <div class="container">
                    <div class="card">
                        <img src={bola} alt="" />
                        <h3>Bola de Vôlei Penalty VP 5000 Amarela e Roxa</h3>
                        <p className="price">R$ 699,99</p>
                        <p className="installments">10x R$ 69,99</p>
                        <p className="brand">PENALTY</p>
                    </div>
                    <div class="card">
                        <img src={raquete} alt="" />
                        <h3>Vollo Raquete de Tênis de Mesa</h3>
                        <p className="price">R$ 69,90</p>
                        <p className="installments">2x R$ 34,99</p>
                        <p className="brand">VOLLO</p>
                    </div>
                    <div class="card">
                        <img src={handgrip} alt="" />
                        <h3>Fortalecedor de aderência de mão Longang com resistência ajustável</h3>
                        <p className="price">R$ 59,99</p>
                        <p className="installments">2x R$ 29,99</p>
                        <p className="brand">LONGLANG</p>
                    </div>
                </div>

            </div>
        

        </ProdutosStyle>
    )
}

export default Produtos