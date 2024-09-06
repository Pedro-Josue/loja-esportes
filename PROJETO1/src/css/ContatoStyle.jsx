import styled from "styled-components";


export const ContatoStyle = styled.section`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

#bg-ctt{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
}


h1{
    font-size: 30px;
    font-weight: 300;
}

h3{
    font-size: 20px;
    font-weight: 300;
}

.formulario {
    background-color: #fff;
    padding: 40px;
    margin: 20px auto;
    width: 60%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.formulario h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
}

.formulario h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    text-align: center;
    color: #666;
}

/* Estilo dos inputs */
.formulario-input input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1rem;
}

.formulario-input input:focus {
    border-color: #fce307;
    outline: none;
}

.formulario-input button {
    width: 100%;
    padding: 12px;
    background-color: #cc8b00;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
}

.formulario-input button:hover {
    background-color: #a77202;
}

/* Seção de localização */
.localização {
    background-color: #a9adb1;
    color: white;
    padding: 20px;
    margin: 20px auto;
    width: 50%;
    border-radius: 8px;
}

.localização h4, .localização p {
    margin: 10px 0;
    text-align: center;
}

.localização ul {
    list-style: none;
    padding: 0;
    text-align: center;
}

.localização li {
    margin: 5px 0;
}

/* Informações de contato */
.info-contato {
    background-color: #f8f9fa;
    padding: 20px;
    margin: 20px auto;
    width: 50%;
    border-radius: 8px;
}

.info-contato h4, .info-contato p {
    margin: 10px 0;
    text-align: center;
}

/* Seção de redes sociais */
.redes-sociais {
    background-color: #a9adb1;
    color: white;
    padding: 20px;
    margin: 20px auto;
    width: 50%;
    border-radius: 8px;
}

.redes-sociais h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #ffffff;
}

.redes-sociais p {
    margin-bottom: 20px;
    color: #e2e2e2;
}

.icones {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.icone-social {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
}

.icone-social:hover {
    transform: scale(1.2);
}
`