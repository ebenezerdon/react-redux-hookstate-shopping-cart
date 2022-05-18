// all lodash actions and none redux-related activities come here

export const getQuantityInCart = (cartProductIds, productId) => {
  return cartProductIds.filter((id) => id === productId).length
}
