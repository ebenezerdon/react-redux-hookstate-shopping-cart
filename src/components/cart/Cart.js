import { useSelector } from 'react-redux'
import productList from '../../data/productList'
import './cart.scss'

const Cart = () => {
  const cartState = useSelector(state => state.cart)
  const set = new Set(cartState.productIds)
  const cartProductIds = [...set]

  const cartProducts = productList.filter(product => cartProductIds.includes(product.id))

  return (
    <div className="cart">
      <h3 className="header">Cart ({cartProducts.length} items)</h3>
      {cartProducts?.map(product =>
        <div key={product.id} className="row">
          <div className="item-image col-lg-3 col-sm-2">
            <img src={product.imageUrl.default} alt="product" />
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
              <button className="btn btn-primary qty-left">
                -
              </button>
              <span>1</span>
              <button className="btn btn-primary qty-right">
                +
              </button>
            </div>
            <p className="item-price">Price: <span>{product.price.symbol}{product.price.value}</span></p>
          </div>
        </div>
      )}
      <footer className="text-center">
        <p className="total-price">Total Price: <span>$4349.344</span></p>
        <button className="btn back-button">CONTINUE SHOPPING</button>
        <button className="btn btn-primary">CHECKOUT</button>
      </footer>
    </div>
  )
}

export default Cart
