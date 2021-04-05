export const types = {
  productListRequest: 'PRODUCT_LIST_REQUEST',
  productListSuccess: 'PRODUCT_LIST_SUCCESS',
  productListFail: 'PRODUCT_LIST_FAIL',

  productDetailsRequest: 'PRODUCT_DETAILS_REQUEST',
  productDetailsSuccess: 'PRODUCT_DETAILS_SUCCESS',
  productDetailsFail: 'PRODUCT_DETAILS_FAIL',

  cartAddItem: 'CART_ADD_ITEM',
  cartRemoveItem: 'CART_REMOVE_ITEM'
}

export type XType = keyof typeof types

export const ObjectValuesArrayType = [
  'PRODUCT_LIST_REQUEST',
  'PRODUCT_LIST_SUCCESS',
  'PRODUCT_LIST_FAIL',
  'PRODUCT_DETAILS_REQUEST',
  'PRODUCT_DETAILS_SUCCESS',
  'PRODUCT_DETAILS_FAIL',
  'CART_ADD_ITEM',
  'CART_REMOVE_ITEM'
] as const

export type ObjectValuesT = typeof ObjectValuesArrayType[number]
