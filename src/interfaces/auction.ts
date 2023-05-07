export interface Product {
    name: string
    slug: string
    regions: any[]
    // drm: object
    type: object
    // isSellable: boolean
    auctions: object
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