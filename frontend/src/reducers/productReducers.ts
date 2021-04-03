import { types } from "../types/productTypes";
import { InitialStateI } from "../types/reducersTypes";

const initialState: InitialStateI = {
  error: null,
  loading: false,
  products: []
}

export const productListReducers = (state = initialState, action: { type: string; payload: unknown; }) => {

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
