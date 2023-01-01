export interface Receipt {
  customer: {
    firstname: string,
    name: string,
    email: string,
    phone: string
  }
  order: {
    items: Item[]
  }
}

interface Item {
  id: string,
  options: string[] | [],
  quantity: number
}