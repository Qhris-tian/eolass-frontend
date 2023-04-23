export interface OrderCard {
  results: Result[]
}

export interface Result {
  card_number: string
  pin_code: string
  claim_url: string
  expire_date?: string
}

export interface Cards {
  [key: string]: Result[]
}
