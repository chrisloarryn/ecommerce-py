import { ActionTypes, ProductI } from '../types/globalTypes'
import {
  InitialStateProductDetailsI,
  InitialStateProductListI
} from '../types/reducersTypes'

import { ObjectValuesT, types } from '../types/types'

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
  action: { type: ActionTypes; payload: unknown }
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
  action: { type: ObjectValuesT; payload: unknown }
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
