import { SobreStyle } from "../css/SobreStyle";
import esportes1 from '../assets/esportes1.jpg';
import esportes2 from '../assets/esportes2.jpg';
import esportes3 from '../assets/esportes3.jpg';
import esportes4 from '../assets/esportes4.jpg';


const Sobre = () => {
    return (
        <SobreStyle>
            <div className="conteudo">
        <section className="quem-somos">
          <h2>Sobre Nós</h2>
          <p>
            Somos movidos pela paixão pelo esporte e pela vontade de fazer a
            diferença na vida das pessoas. A Loja de Esportes nasceu do desejo
            de criar um espaço onde atletas e entusiastas de todas as idades
            possam encontrar não apenas produtos, mas também inspiração e
            suporte para superar seus desafios. Nosso compromisso vai além da
            venda de produtos esportivos. Queremos ser parte da sua jornada,
            entendendo suas necessidades e oferecendo soluções que realmente
            façam a diferença. Cada item que oferecemos é escolhido com
            cuidado, pensando em como ele pode ajudar você a alcançar seus
            objetivos, seja no treino de domingo ou na competição do ano.
            Sabemos que o esporte tem o poder de transformar vidas, de unir
            pessoas e de construir histórias que duram gerações. Por isso, em A
            Loja de Esportes, não tratamos nossos clientes como números, mas
            como pessoas com sonhos, metas e desafios únicos. Estamos aqui para
            ajudar você a encontrar o que precisa para cada etapa da sua
            jornada esportiva. Nossa equipe é formada por pessoas que vivem o
            esporte, que conhecem suas alegrias e desafios, e que estão sempre
            prontas para oferecer o suporte que você precisa. Queremos que você
            se sinta confiante em cada escolha, sabendo que estamos ao seu lado
            em cada passo do caminho. Em A Loja de Esportes, cada compra é o
            começo de uma nova história, e estamos animados para fazer parte da
            sua. Seja qual for o seu esporte, seja qual for o seu objetivo,
            estamos aqui para apoiar você.
          </p>
        </section>

        <div className="galeria-de-fotos">
          <div className="foto-item">
            <img src={esportes1} alt="Treino 1" />
          </div>
          <div className="foto-item">
            <img src={esportes2} alt="Treino 2" />
          </div>
          <div className="foto-item">
            <img src={esportes3} alt="Treino 3" />
          </div>
          <div className="foto-item">
            <img src={esportes4} alt="Treino 4" />
          </div>
        </div>

        <div className="acoes">
          <div className="assine-newsletter">
            <h3>Cadastre-se para receber nossas novidades</h3>
            <p>
              Quer ser o primeiro a saber das nossas novidades? 
              <br />Assine a
              newsletter e fique por dentro de tudo.
            </p>
            <input type="email" placeholder="Digite seu e-mail" />
            <button>ENVIAR</button>
          </div>
        </div>
      </div>


        </SobreStyle>

    );
}

export default Sobre;