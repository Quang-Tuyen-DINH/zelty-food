export interface Product {
  id: string,
  menuId: string,
  name: string,
  description: string,
  image: string,
  price: number,
  available_options: string[],
  sold_out: boolean
}