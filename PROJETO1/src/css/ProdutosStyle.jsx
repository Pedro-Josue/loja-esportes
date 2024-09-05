import styled from "styled-components";

export const ProdutosStyle = styled.section `


#h1_categorias{
    padding: 2%;
    text-align: center;



}
.categorias{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.card{
    display: flex;
    justify-content: center;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
    background-color: #f3f1f1;
    padding: 5%;
    flex-direction: column;
    gap: 4rem;
  
    border-radius: 10px;
}

.card_img{
    width: 200px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;


}

.card h4{
    margin-top: 20%;
    color: #2e2e2e;
    font-size: 1.5em;
    position: relative;
    margin-right: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

}

    
`