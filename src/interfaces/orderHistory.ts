export interface OrderHistory {
  count: number
  next: string | null
  previous: string | null
  results: Result[]
}

export interface Result {
  order_id: number
  delivery_type: number
  destination: null | string
  status: number
  status_text: string
  created_time: string
  terminal_id: null
  reference_code: string
  product: Product
  count: number
  total_face_value: number
  total_fees: number
  total_discounts: number
  total_customer_cost: number
  is_completed: boolean
  share_link: string
}

export interface Product {
  sku: number
  title: string
}
