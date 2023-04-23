export interface Catalog {
  results: Result[]
}

export interface Result {
  sku: number
  upc: number
  title: string
  min_price: number
  max_price: number
  pre_order: boolean
  activation_fee: number
  percentage_of_buying_price: number
  currency: CurrencyClass
  categories: Category[]
  regions: Region[]
  image: string
  description: DescriptionClass | string
  showing_price: ShowingPrice | null
}

export interface Category {
  name: string
}

export interface CurrencyClass {
  currency: string
  symbol: string
  code: string
}

export interface DescriptionClass {
  content: any[]
  barcode: null
}

export interface Region {
  name: string
  code: string
}

export interface ShowingPrice {
  price: number
  showing_currency: CurrencyClass
}
