export interface Price {
  amount: number
  currency: string
}

export interface Auction {
  belongs_to_you: boolean
  is_in_stock: boolean
  merchant_name: string
  price: Price
}

export interface Key {
  node: {
    id: string
    value: string
    state: string
  }
}

export interface Fee {
  amount: number
  currency: string
}

export interface CreateAuctionForm {
  type: string | null
  productId: string | null
  enabled: boolean
  keys: Array<string>
  autoRenew: boolean
  price: {
    amount: number | null
    currency: string
  }
  onHand: number | null
  declaredStock: number | null
}

export interface Product {
  auctions: Auction[]
  created_at: Date
  id: string
  languages: string[]
  name: string
  regions: Region[]
  released_at: Date
  slug: string
  type: Type
}

export interface Price {
  amount: number
  currency: string
}

export interface Region {
  code: string
}

export interface Type {
  value: string
}
