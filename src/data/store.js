import { hookstate } from '@hookstate/core'

export const cart = hookstate({
  cartProductIds: [],
})

export const addToCart = (id) => {
  cart.cartProductIds.merge([id])
}

export const removeFromCart = (id) => {
  const cartProductIds = cart.cartProductIds
  cartProductIds.set(cartProductIds.get().filter((productId) => productId !== id))
}

export const clearAllItems = () => {
  cart.cartProductIds.set([])
}
