import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
        <i className="bi bi-shop-window"/>
        <NavLink to="/cart" activeClassName="selected" title="cart" className="link">
          <i className="bi bi-cart3"/>
        </NavLink>
        <NavLink exact to="/" activeClassName="selected" title="products">
          <i className="bi bi-grid"/>
        </NavLink>
    </nav>
  )
}

export default Navbar
