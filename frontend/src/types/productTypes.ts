import { ProductI } from "./globalTypes"

export type ReviewI = Readonly<{
  product: string
  user: string
  name: string
  rating: number
  comment: string
  _id: string
}>

export type ProductDetailI = Readonly<
  Partial<ProductI> & {
    reviews: ReviewI[]
  }
>