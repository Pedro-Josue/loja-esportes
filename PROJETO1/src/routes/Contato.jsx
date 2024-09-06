import { ContatoStyle } from "../css/ContatoStyle";

import bgctt from "../assets/bg-ctt.jpg";
import fbicon from "../assets/facebook-icon.svg";
import instaicon from "../assets/instagram-icon.svg";
import whatsicon from "../assets/whatsapp-icon.svg";




const Contato=()=>{
    return(
        <ContatoStyle>
            <img src={bgctt} alt="mulheres conversando" id="bg-ctt"/>
            <div className="formulario">
                <h1>Entre em contato</h1>
                <h3>Estamos prontos para ajudar você a alcançar seus objetivos fitness!</h3>
                <div className="formulario-input">
                    <form>
                        <input type="text" placeholder="Nome"/>
                        <input type="text" placeholder="E-mail"/>
                        <input type="text" placeholder="Telefone"/>
                        <input type="text" placeholder="Assunto"/>
                        <input type="text" placeholder="Mensagem"/>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
            <div className="localização">
                <h4>Ou fale com a gente pessoalmente!</h4>
                <p>Estamos nesse endereço</p>
                <p>Av. Paulista 16xx - Bela Vista</p>
                <p>Horário de funcionamento:</p>
                <ul>
                    <li>Segunda a Sexta: 06:00 às 22:00</li>
                    <li>Sábado e Domingo: 08:00 às 14:00</li>
                </ul>
            </div>
            <div className="info-contato">
                <h4>Informações de contato</h4>
                <p>E-mail: contato@academia.com</p>
                <p>Telefone: (11) 98765-4321</p>
            </div>
            <div className="redes-sociais">
                <h2>Siga-nos nas redes sociais</h2>
                <p>Acompanhe nossas novidades:</p>
                <div className="icones">
                    <a href="https://facebook.com/suaacademia" target="_blank">
                    <img src={fbicon} alt="Facebook" class="icone-social"/>
                    </a>
                    <a href="https://instagram.com/suaacademia" target="_blank">
                    <img src={instaicon} alt="Instagram" class="icone-social"/>
                    </a>
                    <a href="https://wa.me/5511987654321" target="_blank">
                    <img src={whatsicon} alt="WhatsApp" class="icone-social"/>
                    </a>
                </div>
            </div>
        </ContatoStyle>
    )
}

export default Contato