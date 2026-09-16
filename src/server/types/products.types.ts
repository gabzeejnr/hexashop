export type Product = {
    id: number,
    source: string,
    name: string,
    description: string,
    category: string[],
    rating:number,
    price: number,
    image: string
}

export type CreateProduct = {
    name: string,
    price: number
}