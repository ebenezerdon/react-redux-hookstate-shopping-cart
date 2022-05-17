import { useDispatch, useSelector } from 'react-redux'
import lodash from 'lodash'
import './cart.scss'
import { cartActions } from './slice'
import productList from '../../data/productList'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const { productIds: cartProductIds } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const history = useNavigate()
  const uniqueProductIds = new Set(cartProductIds)

  const cartProducts = productList.filter((product) => [...uniqueProductIds].includes(product.id))

  const addToCart = (productId) => {
    dispatch(cartActions.addToCart(productId))
  }

  const removeFromCart = (productId) => {
    dispatch(cartActions.removeFromCart(productId))
    if (lodash.countBy(cartProductIds)[productId] === 1) {
      toast.info('Product has been removed from cart')
    }
  }

  const clearInCart = (productId) => {
    dispatch(cartActions.clearInCart(productId))
    toast.info('Product has been removed from cart')
  }

  const clearAllItems = () => {
    dispatch(cartActions.clearAllItems([]))
    history.push('/checkout')
  }

  const productPriceList = cartProducts.map(
    (product) => product.price.value * lodash.countBy(cartProductIds)[product.id],
  )

  const totalPrice = lodash.sum(productPriceList)

  console.log(cartProducts[0].imageUrl)

  return (
    <div className="cart">
      {cartProducts.length >= 1 && (
        <div className="cart-product">
          <h3 className="header">Cart ({cartProducts.length} items)</h3>
          {cartProducts?.map((product) => (
            <div key={product.id} className="row">
              <div className="item-image col-lg-3 col-sm-2">
                <img src={product.imageUrl.default} alt="product" />
              </div>
              <div className="item-info col-lg-7 col-sm-5">
                <h4>{product.name}</h4>
                <p className="text-truncate">{product.detail}</p>
                <button className="btn btn-primary me-md-2 remove-button" onClick={() => clearInCart(product.id)}>
                  <i className="bi bi-trash-fill" /> Remove Item
                </button>
              </div>
              <div className="item-info col-lg-2 col-sm-3">
                <div className="qty-buttons">
                  <button className="btn btn-primary qty-left" onClick={() => removeFromCart(product.id)}>
                    -
                  </button>
                  <span>{lodash.countBy(cartProductIds)[product.id]}</span>
                  <button className="btn btn-primary qty-right" onClick={() => addToCart(product.id)}>
                    +
                  </button>
                </div>
                <p className="item-price">
                  Price:
                  <span>
                    {product.price.symbol}
                    {product.price.value * lodash.countBy(cartProductIds)[product.id]}
                  </span>
                </p>
              </div>
            </div>
          ))}
          <footer className="text-center">
            <p className="total-price">
              Total Price: <span>${totalPrice}</span>
            </p>
            <Link to="/" className="btn back-button">
              CONTINUE SHOPPING
            </Link>
            <button onClick={clearAllItems} className="btn btn-primary">
              CHECKOUT
            </button>
          </footer>
        </div>
      )}
      {cartProducts.length < 1 && (
        <div className="text-center empty-cart">
          <i className="bi bi-cart3" />
          <p>Your cart is empty.</p>
          <p>You have not added any item to your cart.</p>
          <Link to="/" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
