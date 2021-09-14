import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
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
    }
  }
})

const { actions: cartActions, reducer: cartReducer } = slice
export { cartActions, cartReducer }
