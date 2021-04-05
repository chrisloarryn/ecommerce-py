import { CartItemI } from './cartTypes'
import { ProductI } from './globalTypes'
import { ProductDetailI } from './productTypes'

export type InitialStateProductListI = Readonly<{
  error: string | null
  loading: boolean
  products?: ProductI[]
}>

export type InitialStateProductDetailsI = Readonly<{
  error: string | null
  loading: boolean
  product?: ProductDetailI
}>

export type InitialStateCartItemsI = Readonly<{
  error: string | null
  loading: boolean
  cartItems?: CartItemI[]
}>

export type GlobalReducersProductType = Readonly<{
  productList: InitialStateProductListI
  productDetails: InitialStateProductDetailsI
  cart: InitialStateCartItemsI
}>
