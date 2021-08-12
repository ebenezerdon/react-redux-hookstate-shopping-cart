import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
        <i className="bi bi-shop-window"/>
        <NavLink to="/cart" activeClassName="selected">
          <i className="bi bi-cart3"/>
        </NavLink>
        <NavLink exact to="/" activeClassName="selected">
          <i className="bi bi-grid"/>
        </NavLink>
    </nav>
  )
}

export default Navbar
