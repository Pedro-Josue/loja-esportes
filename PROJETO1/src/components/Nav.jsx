import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'
// importando o link do react-router-dom, para conseguir criar as rotas na navbar
const Nav=()=>{
    return(
        <NavStyle>
            <section className='nav'>
                <Link to='/' className='navlink'>Home</Link>
                <Link to='/produtos' className='navlink'>Produtos</Link>
                <Link to='/contato' className='navlink'>Contato</Link>
                <Link to='sobre' className='navlink'>Sobre</Link>
            </section>
        </NavStyle>
    )
}

export default Nav