import './productCatalogue.scss'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { cartActions } from '../cart'
import productList from '../../data/productList'

const ProductCatalogue = () => {
  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const addToCart = productId => {
    dispatch(cartActions.addToCart(productId))
    console.log('====>', cartState)
  }

  const removeFromCart = productId => {
    dispatch(cartActions.removeFromCart(productId))
    console.log('====>', cartState)
  }

  return (
    <div className="product-catalogue">
      {/*<h1>Product Catalogue</h1>*/}
      <div className="row">
        {productList.map((product, index) => {
            return (
              <div className="card col-sm-3" key={index}>
                <img className="card-img-top"
                     src={product.imageUrl?.default || product.imageUrl}
                     alt="Card cap"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price.symbol}{product.price.value}</p>
                  <div className="qty-buttons">
                    <button className="btn qty-right" onClick={() => removeFromCart(product.id)}>
                      -
                    </button>
                    {cartState.productIds.includes(product.id) &&
                      <button className="btn btn-primary cursor-default">
                        {_.countBy(cartState.productIds)[product.id]} in cart
                      </button>
                    }
                    {!cartState.productIds.includes(product.id) &&
                      <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                        Add to cart
                      </button>
                    }
                    <button className="btn qty-left" onClick={() => addToCart(product.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>)
          }
        )}
      </div>
    </div>
  )
}

export default ProductCatalogue
