import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import { getProducts } from "../../server/products/product";
import styles from "./Products.module.scss";

type ProductHolder = {
    slug:string,
    name: string,
    img: string,
    rating: number,
    price: number
}

export function ProductHolder({ slug, name, img, price, rating }: ProductHolder) {

    return (
        <div className={`${styles["product-holder"]} relative border rounded-lg h-70 md:h-80 overflow-hidden`}>
            <div className={`${styles["image-wrapper"]} relative h-3/4 grid`}>
                <Image src={img} alt={name} fill sizes="auto" className="object-cover place-self-center" />
                <div className={`${styles.hover} hidden absolute z-1 h-full w-full flex-col items-center justify-center`}>
                    <button type="button" className="rounded-lg p-1 bg-gray-500 text-white font-medium cursor-pointer">
                        <Link href={`/products/product/${slug}`}>View Details</Link>
                    </button>
                </div>
            </div>
            <div className={`${styles["detail-wrapper"]} px-2 h-1/4 flex flex-col justify-center`}>
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

    const response = await getProducts({search});
    if ("error" in response) {
        return <div>{response.error}</div>
    }
    const { data } = response
    const max = Math.ceil(data.length / 20);

    return (
        <div className="px-2 md:px-10">
            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {data.map(dat => (<ProductHolder key={dat.name} name={dat.name} img={dat.image} slug={dat.slug}
                    price={dat.price} rating={dat.rating} />))
                }
            </div>
            <Pagination max={max} />
        </div>
    )
}