import axios from 'axios'
import { types } from './../types/types'

export const addToCart = (_id: string, qty: number) => async (
  dispatch: (arg0: { type: string; payload: { product: any; name: any; image: any; price: any; countInStock: any; qty: number } }) => void,
  getState: () => { (): any; new(): any; cart: { (): any; new(): any; cartItems: any } }
) => {
  const { data } = await axios.get(`/api/products/${_id}`)
  dispatch({
    type: types.cartAddItem,
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
