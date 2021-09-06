import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.scss'

const Navbar = () => {
  const cartState = useSelector(state => state.cart)
  const noOfItemsInCart = new Set(cartState.productIds).size
  
  return (
    <nav className="navbar">
      <i className="bi bi-shop-window"/>
      <NavLink to="/cart" activeClassName="selected" title="cart" className="link">
        <i className="bi bi-cart3"/>
        <sup className="cart-number">{noOfItemsInCart}</sup>
      </NavLink>
      <NavLink exact to="/" activeClassName="selected" title="products">
        <i className="bi bi-grid"/>
      </NavLink>
    </nav>
  )
}

export default Navbar
