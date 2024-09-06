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
    height: 40px;
    width: 200px;
    background-color: orange;
    color: white;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
}

.home h1{
    margin-top: 7%;
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
    gap: 10%;
}

#btn-entrar{
    background-color: transparent;
    border: solid;
    border-color: white;
}

.icons {
    display: flex;
    justify-content: center;
    gap: 8rem;
    margin-top: 8%;
}

.icons .icon-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.3s ease;
    font-family: 'Roboto', sans-serif;
}

.icons .icon-wrapper::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: transform 0.3s ease; 
}

.icons .icon-wrapper:hover {
    transform: scale(1.2);
}

.icons .icon-wrapper:hover::before {
    transform: translate(-50%, -50%) scale(1.15);
}

.icons img {
    height: 100px;
    cursor: pointer;
    position: relative;
    z-index: 1; 
}

#bola-fut{
    height: 120px;
} 

.icons .icon-texto {
    position: absolute;
    bottom: -30px;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    text-shadow: black 0.1em 0.1em 0.1em;
    font-family: 'Roboto', sans-serif;
}

`