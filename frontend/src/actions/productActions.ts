import axios from 'axios'
import { ProductI } from '../types/products'

import { types } from '../types/productTypes'
import { ProductDetailI } from '../types/reducersTypes'

export const listProducts = () => async (dispatch: (arg0: { type: string; payload?: unknown }) => void) => {
  try {
    dispatch({ type: types.productListRequest })
    const { data }: { data: ProductI[] } = await axios.get('/api/products')
    dispatch({ type: types.productListSuccess, payload: data })
  } catch (err) {
    dispatch({
      type: types.productListFail,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
    })
  }
}


export const listProductDetails = (_id: string) => async (dispatch: (arg0: { type: string; payload?: unknown }) => void) => {
  try {
    dispatch({ type: types.productDetailsRequest })
    const { data }: { data: ProductDetailI[] } = await axios.get(`/api/products/${_id}`)
    dispatch({ type: types.productDetailsSuccess, payload: data })
  } catch (err) {
    dispatch({
      type: types.productDetailsFail,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
    })
  }
}