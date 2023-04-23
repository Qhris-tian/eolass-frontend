export interface Balance {
  currency: Currency
  balance: number
}

export interface Currency {
  currency: string
  symbol: string
  code: string
}
