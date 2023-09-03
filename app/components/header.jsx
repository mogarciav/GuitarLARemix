import { NavLink } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

function Header() {

    
  return (
    <header className="header">
        <div className="contenedor barra">
            <NavLink to="/">
                <img className='logo' src={logo} alt='Imagen logo'/>
            </NavLink>
            <Navegacion />
           
        </div>

    </header>
  )
}

export default Header
