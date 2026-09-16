export type Product = {
    id: number,
    slug: string,
    source: string,
    name: string,
    description: string,
    category: string[],
    rating: number,
    price: number,
    image: string
}

export type CreateProduct = {
    name: string,
    price: number
}