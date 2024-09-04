import styled from "styled-components";

export const HomeStyle = styled.section `
.roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}

#img-fundo{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.home{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    color: white;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
}

.btn-home button{
    border-radius: 15px;
    border: 50px;
    height: 35px;
    width: 200px;
    background-color:#c7c7c7;
    cursor: pointer;
}

.home h1{
    font-size: 400%;
    text-shadow: black 0.2em 0.2em 0.2em;
}

.home h3{
    font-size: 150%;
    text-shadow: black 0.2em 0.2em 0.2em;
    margin-bottom: 7%;
}

.btn-home{
    display: flex;
    justify-content: center;
    gap: 1%;
    font-family: 'Roboto', sans-serif;
}

.icons{
    display: flex;
    gap: 5rem;
    margin-top: 5%;
}

.icons img{
    height: 80px;
}
`