// @ts-nocheck
import { useHookstate } from '@hookstate/core'
import productList from '../data/productList.json'
import { cart, removeFromCart, clearAllItems } from '../data/store'
import '../styles/cart.scss'

const Cart = () => {
  const { cartProductIds } = useHookstate(cart)
  const cartProductData = productList.products.filter((product) => cartProductIds.get().includes(product.id))

  return (
    <div className="cart">
      {cartProductData.length > 0 && (
        <div className="cart-product">
          <h3 className="header">Items in cart</h3>
          {cartProductData?.map((product) => (
            <div key={product.id} className="row">
              <img className="item-image" src={product.imageUrl} alt="product" />

              <div className="item-info">
                <h4>{product.name}</h4>
                <p className="text-truncate">{product.detail}</p>
                <button className="btn btn-primary" onClick={() => removeFromCart(product.id)}>
                  <i className="bi bi-trash-fill" /> Remove Item
                </button>
              </div>
            </div>
          ))}

          <footer className="text-center">
            <button onClick={() => clearAllItems()} className="btn btn-primary">
              CHECKOUT
            </button>
          </footer>
        </div>
      )}

      {cartProductData.length < 1 && (
        <div className="text-center empty-cart">
          <i className="bi bi-cart3" />
          <p>Your cart is empty.</p>
          <p>You have not added any item to your cart.</p>
        </div>
      )}
    </div>
  )
}

export default Cart
