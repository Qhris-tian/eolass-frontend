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
  pin_code: string | null
  claim_url: string | null
  product: number
  expire_date: string | null
  created_at: string
  updated_at: string
}
