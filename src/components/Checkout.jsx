import { Link } from 'react-router-dom'
import '../styles/checkout.scss'

const Checkout = () => {
  return (
    <div className="checkout text-center">
      <i className="bi bi-cart-check" />
      <h1>Thank you for your order</h1>
      <p>Your order number is: R613195498</p>
      <Link to="/" className="btn">
        CONTINUE SHOPPING
      </Link>
    </div>
  )
}

export default Checkout
