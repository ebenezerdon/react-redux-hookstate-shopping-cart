import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/cart">
          <i className="bi bi-cart3"/>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
