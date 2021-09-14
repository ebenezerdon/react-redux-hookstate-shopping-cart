import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import './cart.scss'
import { cartActions } from './slice'
import productList from '../../data/productList'
import { toast } from 'react-toastify'

const Cart = () => {
  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const set = new Set(cartState.productIds)
  const cartProductIds = [...set]

  const cartProducts = productList.filter(product => cartProductIds.includes(product.id))

  const addToCart = productId => {
    dispatch(cartActions.addToCart(productId))
  }

  const removeFromCart = productId => {
    dispatch(cartActions.removeFromCart(productId))
    if (_.countBy(cartState.productIds)[productId] === 1) {
      toast.info('Product has been removed from cart')
    }
  }

  const productPrice = cartProducts.map(
    product => product.price.value * _.countBy(cartState.productIds)[product.id]
  )

  const totalPrice = productPrice.reduce((firstValue, secondValue) => firstValue + secondValue, 0)

  return (
    <div className="cart">
      {cartProducts.length >= 1 &&
      <div className="cart-product">
        <h3 className="header">Cart ({cartProducts.length} items)</h3>
        {cartProducts?.map(product =>
          <div key={product.id} className="row">
            <div className="item-image col-lg-3 col-sm-2">
              <img src={product.imageUrl.default} alt="product"/>
            </div>
            <div className="item-info col-lg-7 col-sm-5">
              <h4>{product.name}</h4>
              <p className="text-truncate">{product.detail}</p>
              <button className="btn btn-primary me-md-2 remove-button">
                <i className="bi bi-trash-fill"/> Remove Item
              </button>
            </div>
            <div className="item-info col-lg-2 col-sm-3">
              <div className="qty-buttons">
                <button className="btn btn-primary qty-left"
                        onClick={() => removeFromCart(product.id)}
                >
                  -
                </button>
                <span>{_.countBy(cartState.productIds)[product.id]}</span>
                <button className="btn btn-primary qty-right"
                        onClick={() => addToCart(product.id)}
                >
                  +
                </button>
              </div>
              <p className="item-price">Price:
                <span>{product.price.symbol}
                  {product.price.value * _.countBy(cartState.productIds)[product.id]}
                  </span>
              </p>
            </div>
          </div>
        )}
        <footer className="text-center">
          <p className="total-price">Total Price: <span>${totalPrice}</span></p>
          <button className="btn back-button">CONTINUE SHOPPING</button>
          <button className="btn btn-primary">CHECKOUT</button>
        </footer>
      </div>
      }
      {cartProducts.length < 1 &&
      <div className="text-center empty-cart">
        <i className="bi bi-cart3"/>
        <p>Your cart is empty.</p>
        <p>You have not added any item to your cart.</p>
        <button className="btn btn-primary">Start Shopping</button>
      </div>
      }
    </div>
  )
}

export default Cart
