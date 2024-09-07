import styled from "styled-components";

export const ProdutosStyle = styled.section `


#h1_categorias{
    padding: 2%;
    text-align: center;



}

.container_principal{

    display: flex;
   
    justify-content: space-around;
    flex-direction: column;
    gap: 4rem;
    padding: 5%;
}



.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
    padding: 20px;
}

.card img {
    max-width: 100%;
    height: auto;
}

.card h3 {
    font-size: 18px;
    color: #333;
    margin: 15px 0;
}

.card .price {
    font-size: 24px;
    color: #e53935;
    margin: 10px 0;
}

.card .installments {
    font-size: 16px;
    color: #888;
    margin-bottom: 10px;
}

.card .brand {
    font-size: 14px;
    color: #555;
}


    
`