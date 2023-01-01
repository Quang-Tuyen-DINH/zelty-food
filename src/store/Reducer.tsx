import { CartProduct } from "../shared/models/CartProduct.model";
import { Product } from "../shared/models/Product.model";
import * as types from "./Constants";

const initialState = {
  menu: [],
  products: [],
  options: [],
  cartProducts: [],
  client: {}
};

const Reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case types.LOAD_MENU:
      return {
        ...state,
        menu: action.payload
      };
    case types.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case types.LOAD_OPTIONS:
      return {
        ...state,
        options: action.payload
      };
    case types.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.concat(action.payload)
      };
    case types.REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter((product: CartProduct) => product.commandId !== action.payload)
      };
    default:
      return state;
  }
}

export default Reducer;