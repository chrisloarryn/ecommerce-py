import { ProductI } from '../types/products'
import {
  InitialStateProductDetailsI,
  InitialStateProductListI
} from '../types/reducersTypes'

import { types } from '../types/productTypes'

const initialStateList: InitialStateProductListI = {
  error: null,
  loading: false,
  products: []
}

const initialStateDetail: InitialStateProductDetailsI = {
  error: null,
  loading: false,
  product: {
    reviews: []
  }
}

export const productListReducer = (
  state = initialStateList,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case types.productListRequest:
      return {
        ...state,
        loading: true,
        products: []
      }
    case types.productListSuccess:
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    case types.productListFail:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const productDetailReducer = (
  state = initialStateDetail,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case types.productDetailsRequest:
      return {
        ...state,
        loading: true
      }
    case types.productDetailsSuccess:
      return {
        ...state,
        loading: false,
        product: {
          ...state.product,
          ...(action.payload as ProductI)
        }
      }
    case types.productDetailsFail:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
