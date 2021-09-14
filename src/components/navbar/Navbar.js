import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        transition={Slide}
        hideProgressBar={true}
      />
    </nav>
  )
}

export default Navbar
