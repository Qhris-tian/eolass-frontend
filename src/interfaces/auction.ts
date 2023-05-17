export interface Product {
  id: string
  name: string
  slug: string
  regions: any[]
  // drm: object
  type: object
  // isSellable: boolean
  auctions: object
}

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
  productId: string
  enabled: boolean
  keys: Array<string>
  autoRenew: boolean
  price: {
    amount: number
    currency: string
  }
  onHand: number | null
  declaredStock: number | null
}
