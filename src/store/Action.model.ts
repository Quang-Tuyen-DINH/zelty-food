import { Menu } from "../shared/models/menu.model";
import { Product } from "../shared/models/product.model";
import { Option } from "../shared/models/option.model";
import { CartProduct } from "../shared/models/cartProduct.model";
import { ClientCheckout } from "../shared/models/clientCheckout.model";

export type Action =
  | { type: "LOAD_MENU"; payload: Menu[] }
  | { type: "LOAD_PRODUCTS"; payload: Product[] }
  | { type: "LOAD_OPTIONS"; payload: Option[] }
  | { type: "ADD_PRODUCT"; payload: CartProduct }
  | { type: "REMOVE_PRODUCT"; payload: string }
  | { type: "REMOVE_ALL_PRODUCTS" }
  | { type: "SAVE_CLIENT"; payload: ClientCheckout };