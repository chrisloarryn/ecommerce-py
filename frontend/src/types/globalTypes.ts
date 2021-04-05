import { ObjectValuesT } from "./types"

export type TParams = {
  _id: string
}

export type ProductI = {
  _id: string
  name: string
  image: string
  description: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
}

export type ActionTypes = ObjectValuesT
