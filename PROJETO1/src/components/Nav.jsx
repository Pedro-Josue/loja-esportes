import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'
import logo from '../assets/iconeLoja.svg'

// importando o link do react-router-dom, para conseguir criar as rotas na navbar
const Nav=()=>{
    return(
        <NavStyle>
            <nav className='navbar'>
                <img src={logo} alt="Icone da loja" id='logo-nav' />
                <div className='nav-links'>
                    <Link to='/' className='navlink'>Home</Link>
                    <Link to='/produtos' className='navlink'>Produtos</Link>
                    <Link to='/contato' className='navlink'>Contato</Link>
                    <Link to='/sobre' className='navlink'>Sobre</Link>
                </div>
            </nav>
        </NavStyle>
    )
}

export default Nav