import styled from "styled-components";

export const SobreStyle = styled.section`
  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  .quem-somos {
    max-width: 80%;
    margin-bottom: 4rem;
    text-align: center;
  }

  .quem-somos h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .quem-somos p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .galeria-de-fotos {
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .foto-item {
    width: 20%;
    height: auto;
    overflow: hidden;
    border-radius: 0.625rem;
  }

  .foto-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .acoes {
    display: flex;
    gap: 4rem;
  }

  .assine-newsletter,
  .redessociais {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .assine-newsletter h3,
  .redessociais h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .assine-newsletter p,
  .redessociais p {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .assine-newsletter input {
    padding: 1rem;
    border-radius: 0.3125rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  .assine-newsletter button {
    padding: 1rem 2rem;
    border-radius: 0.3125rem;
    background-color: #ffa500;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .assine-newsletter button:hover {
    background-color: #ff8c00;
  }
`;