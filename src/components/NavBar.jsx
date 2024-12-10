import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  
    return (
      <>
        <header>
            <div className="nav-bar">
                <div className="logo-nav animate__animated animate__fadeInDown">
                    <NavLink to='/' className="brandLink">
                        <p>AeroViajes</p>
                    </NavLink>
                </div>
                <ul className="nav-list animate__animated animate__fadeInDown">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products/Nuevos'>Nuevos Ingresos</NavLink></li>
                    <li><NavLink to='/products/Ofertas'>Ofertas</NavLink></li>
                    <li><NavLink to='/products/mas vendidos'>Mas Vendidos</NavLink></li>
                </ul>
                <CartWidget counter={10}/>
            </div>
        </header>
      </>
    )
}

export default NavBar
