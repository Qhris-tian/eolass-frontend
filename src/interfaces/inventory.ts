export interface Product {
  _id: string
  created_at: string
  updated_at: string
  sku: number
  title: string
  region: string | null
}

export interface Card {
  _id: string
  card_number: string
  pin_code: string
  claim_url: string
  product: number
  expire_date: string
  created_at: string
  updated_at: string
}
