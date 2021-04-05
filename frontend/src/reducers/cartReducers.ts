import { CartItemI } from '../types/cartTypes'
import { ActionTypes } from '../types/globalTypes'
import { InitialStateCartItemsI } from '../types/reducersTypes'
import { types } from '../types/types'

const cartItemsFromStorage: CartItemI[] = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') as string)
  : []

const initialCartState: InitialStateCartItemsI = {
  error: null,
  loading: false,
  cartItems: cartItemsFromStorage
}

export const cartReducer = (
  state = initialCartState,
  action: { type: ActionTypes; payload: any }
) => {
  switch (action.type) {
    case types.cartAddItem:
      const item = action.payload
      const existItem = (state.cartItems as CartItemI[]).find((p) => p.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: (state.cartItems as CartItemI[]).map((p) =>
            p.product === existItem.product ? item : p
          )
        }
      } else {
        return { ...state, cartItems: [...(state.cartItems as CartItemI[]), item] }
      }

    default:
      return state
  }
}
