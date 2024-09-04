import styled from 'styled-components'

export const NavStyle =styled.section `

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #c7c7c7;
    padding: 10px;
    position: relative;
    z-index: 1000;
}

#logo-nav {
    width: 50px;
    height: 50px;
    margin-left: 0.5%;
}

.nav-links {
    display: flex;
    justify-content: center;
    gap: 5rem;
    width: 100%;
}

.navlink {
    font-size: 1.25rem;
    color: black;
    text-decoration: none;
    padding: 20px;
}
`