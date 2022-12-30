export interface Option {
  id: string,
  name: string,
  items: Item[]
}

interface Item {
  id: string,
  name: string
}