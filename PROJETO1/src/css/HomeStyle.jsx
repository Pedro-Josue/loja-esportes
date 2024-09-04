import styled from "styled-components";

export const HomeStyle = styled.section `
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
}

.btn-home button{
    border-radius: 15px;
    border: none;
    height: 35px;
    width: 150px;
    background-color:#c7c7c7;
    cursor: pointer;
}

.btn-home{
    display: flex;
    justify-content: center;
    gap: 1%;
}
`