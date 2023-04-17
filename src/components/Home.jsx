// @ts-nocheck
import { useHookstate } from '@hookstate/core'
import productList from '../data/productList.json'
import { addToCart, removeFromCart, cart } from '../data/store'
import '../styles/home.scss'

const Home = () => {
  const { cartProductIds } = useHookstate(cart)
  console.log(cartProductIds.get())

  return (
    <div className="container product-catalogue">
      <div className="row">
        {productList.products.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img
                  className="card-img-top center-block"
                  // @ts-ignore
                  src={product.imageUrl}
                  alt="Card cap"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  {!cartProductIds.get().includes(product.id) && (
                    <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                      Add to cart
                    </button>
                  )}

                  {cartProductIds.get().includes(product.id) && (
                    <button className="btn btn-primary" onClick={() => removeFromCart(product.id)}>
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
