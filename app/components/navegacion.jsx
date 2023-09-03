import { NavLink, useLocation } from '@remix-run/react'



function Navegacion() {

    const location = useLocation()
  return (
    <nav className="navegacion">
    <NavLink to="/" className={location.pathname === 'inicio' ? 'active' : ''}>Inicio</NavLink>
    <NavLink to="/nosotros" className={location.pathname === 'nosotros' ? 'active' : ''}>Nosotros</NavLink>
    <NavLink to="/tienda" className={location.pathname === 'tienda' ? 'active' : ''}>Tienda</NavLink>
    <NavLink to="/blog" className={location.pathname === 'blog' ? 'active' : ''}>Blog</NavLink>
</nav>
  )
}

export default Navegacion
