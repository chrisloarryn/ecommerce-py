import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  productDetailReducer,
  productListReducer
} from './../reducers/productReducers'
import { cartReducer } from './../reducers/cartReducers'

const reducer = combineReducers({
  productDetails: productDetailReducer,
  productList: productListReducer,
  cart: cartReducer
})

export const initialErrorAndLoading = {
  error: null,
  loading: false,
}

const initialState = {
  /* productList: {
    ...initialErrorAndLoading,
    products: []
  },
  productDetails: {
    ...initialErrorAndLoading,
    product: {
      reviews: []
    }
  }, */
  /* cart: {
    cartItems: cartItemsFromStorage
  } */
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
