import './productCatalogue.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import _ from 'lodash'
import { cartActions } from '../cart'
import productList from '../../data/productList'

const ProductCatalogue = () => {
  const cartState = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const addToCart = (productId) => {
    dispatch(cartActions.addToCart(productId))
    if (!cartState.productIds.includes(productId)) {
      toast.info('Product has been added to cart')
    }
  }

  const removeFromCart = (productId) => {
    dispatch(cartActions.removeFromCart(productId))
    if (_.countBy(cartState.productIds)[productId] === 1) {
      toast.info('Product has been removed from cart')
    }
  }

  return (
    <div className="container product-catalogue">
      <div className="row">
        {productList.map((product, index) => {
          return (
            <div className="wrapper col-md-4" key={index}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    {product.price.symbol}
                    {product.price.value}
                  </p>
                  <div className="qty-buttons">
                    <button className="btn qty-right" onClick={() => removeFromCart(product.id)}>
                      -
                    </button>
                    {cartState.productIds.includes(product.id) && (
                      <button className="btn btn-primary cursor-default">
                        {_.countBy(cartState.productIds)[product.id]} in cart
                      </button>
                    )}
                    {!cartState.productIds.includes(product.id) && (
                      <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                        Add to cart
                      </button>
                    )}
                    <button className="btn qty-left" onClick={() => addToCart(product.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCatalogue
