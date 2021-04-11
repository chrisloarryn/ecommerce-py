import axios from 'axios'
import { CartItemI } from '../types/cartTypes'
import { ProductI } from '../types/globalTypes'
import { ObjectValuesT, types } from './../types/types'

export const addToCart = (_id: string, qty: number) => async (
  dispatch: (arg0: {
    type: ObjectValuesT
    payload: Partial<ProductI & CartItemI>
  }) => void,
  getState: () => {
    (): any
    new (): any
    cart: { (): any; new (): any; cartItems: any }
  }
) => {
  const { data } = await axios.get(`/api/products/${_id}`)
  dispatch({
    type: types.cartAddItem as ObjectValuesT,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (_product: string) => (
  dispatch: (arg0: { type: ObjectValuesT; payload: string }) => void,
  getState: () => { (): any; new(): any; cart: { (): any; new(): any; cartItems: any } }
) => {
  dispatch({
    type: types.cartRemoveItem as ObjectValuesT,
    payload: _product
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
