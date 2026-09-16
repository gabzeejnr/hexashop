import Image from "next/image";
import Pagination from "./Pagination";
import { getProducts } from "../../server/products/product";

type ProductHolder = {
    name: string,
    img: string,
    rating: number,
    price: number
}

export function ProductHolder({ name, img, price, rating }: ProductHolder) {

    return (
        <div className="border rounded-lg h-80 overflow-hidden">
            <div className="relative h-3/4 grid">
                <Image src={img} alt={name} fill className="object-cover place-self-center" />
            </div>
            <div className="px-2 h-1/4 flex flex-col justify-center">
                <div className="font-medium text-base">{name}</div>
                <div>{rating}</div>
                <div className="tracking-[2px]">$
                    <span className="font-bold">{price}</span>
                </div>
            </div>
        </div>
    )
}

export default async function Products({ searchParams }) {

    const { search } = await searchParams;

    console.log(search)

    const response = await getProducts(null, search);
    if ("error" in response) {
        return <div>{response.error}</div>
    }
    const { data } = response
    const max = Math.ceil(data.length / 20);

    return (
        <div className="px-2 md:px-10">
            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {data.map(dat => (<ProductHolder key={dat.name} name={dat.name} img={dat.image}
                    price={dat.price} rating={dat.rating} />))
                }
            </div>
            <Pagination max={max} />
        </div>
    )
}