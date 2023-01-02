export interface CheckoutData {
  customer: {
    firstName: string,
    name: string,
    email: string,
    phone: string
  },
  order: {
    items: Item[]
  }
}

interface Item {
  id: string,
  options: string[],
  quantity: number
}