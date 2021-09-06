import { useSelector } from 'react-redux'
import './cart.scss'
import photoUrlTest from '../../data/images/products/bubbles-gumball-apron-black.jpg'

const Cart = () => {
  const cartState = useSelector(state => state.cart)
  const noOfItemsInCart = new Set(cartState.productIds).size
  
  return (
    <div className="cart">
      <h3 className="header">Cart ({noOfItemsInCart} items)</h3>
      <div className="row">
        <div className="item-image col-lg-3 col-sm-2">
          <img src={photoUrlTest} alt="product" />
        </div>
          <div className="item-info col-lg-7 col-sm-5">
            <h4>Mens Casual Premium Slim Fit T-Shirts</h4>
            <p className="text-truncate">Slim-fitting style, light weight & soft fabric for
              breathable and comfortable wearing.
            </p>
            <button className="btn btn-primary me-md-2 remove-button">
              <i className="bi bi-trash-fill"/> Remove Item
            </button>
          </div>
        <div className="item-info col-lg-2 col-sm-3">
          <div className="qty-buttons">
            <button className="btn btn-primary qty-left">
              -
            </button>
            <span>1</span>
            <button className="btn btn-primary qty-right">
              +
            </button>
          </div>
          <p className="item-price">Price: <span>$687.93</span></p>
        </div>
      </div>
      <footer className="text-center">
        <p className="total-price">Total Price: <span>$4349.344</span></p>
        <button className="btn back-button">CONTINUE SHOPPING</button>
        <button className="btn btn-primary">CHECKOUT</button>
      </footer>
    </div>
  )
}

export default Cart
