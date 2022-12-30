import * as types from "./Constants";

const initialState = {
  products: [],
  menu: []
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
    default:
      return state;
  }
}

export default Reducer;