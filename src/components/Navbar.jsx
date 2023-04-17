import { useHookstate } from '@hookstate/core'
import { NavLink } from 'react-router-dom'
import { cart } from '../data/store'
import '../styles/navbar.scss'

const Navbar = () => {
  const { cartProductIds } = useHookstate(cart)
  // @ts-ignore

  return (
    <nav className="navbar">
      <NavLink to="/" end>
        <i className="bi bi-shop-window" />
      </NavLink>

      <NavLink to="/cart" title="cart" className={({ isActive }) => `${isActive && 'selected'}`}>
        <i className="bi bi-cart3" />
        <sup className="cart-number">{cartProductIds.get().length}</sup>
      </NavLink>

      <NavLink to="/" className={({ isActive }) => (isActive ? 'selected' : '')} title="products" end>
        <i className="bi bi-grid" />
      </NavLink>
    </nav>
  )
}

export default Navbar
