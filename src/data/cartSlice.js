import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { productIds: [] },
  reducers: {
    addToCart: (state, action) => {
      state.productIds = [action.payload, ...state.productIds]
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.productIds.indexOf(action.payload)
      if (indexOfId >= 0) {
        state.productIds.splice(indexOfId, 1)
      }
    },
    clearInCart: (state, action) => {
      state.productIds = state.productIds.filter((id) => id !== action.payload)
    },
    clearAllItems: (state) => {
      state.productIds = []
    },
  },
})

const { actions: cartActions, reducer: cartReducer } = cartSlice

export { cartActions, cartReducer }
