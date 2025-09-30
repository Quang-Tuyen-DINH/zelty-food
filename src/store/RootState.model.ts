import { Menu } from "../shared/models/Menu.model";
import { Product } from "../shared/models/Product.model";
import { Option } from "../shared/models/Option.model";
import { CartProduct } from "../shared/models/CartProduct.model";
import { ClientCheckout } from "../shared/models/ClientCheckout.model";

export interface RootState {
  menu: Menu[];
  products: Product[];
  options: Option[];
  cartProducts: CartProduct[];
  client: ClientCheckout;
}