export interface Product {
  _id: string
  created_at: Date | null
  updated_at: Date
  sku: number
  title: string
  region: string | null
}

export interface Cards {
  _id: string
  card_number: string
  pin_code: string
  claim_url: string
  product: number
  expire_date: string
  created_at: Date | null
  updated_at: Date | null
}
