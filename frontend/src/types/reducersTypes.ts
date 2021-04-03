import Product from '../components/Product'
import { ProductI } from './products'

export type InitialStateProductListI = Readonly<{
  error: string | null
  loading: boolean
  products: ProductI[]
}>

export type ProductDetailI = Readonly<
  Partial<ProductI> & {
    reviews: ReviewI[]
  }
>

export type ReviewI = Readonly<{
  product: string
  user: string
  name: string
  rating: number
  comment: string
}>

export type InitialStateProductDetailsI = Readonly<{
  error: string | null
  loading: boolean
  product: ProductDetailI
}>

export type GlobalReducersProductType = Readonly<{
  productList: InitialStateProductListI
  productDetails: InitialStateProductDetailsI
}>
