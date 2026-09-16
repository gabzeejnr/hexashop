import Link from "next/link";
import { getProducts, getCategories } from "../../server/products/product";
import FilterClient from "./FilterClient";

function CategoryCard({ category }) {
    return (
        <Link href={`/products/category/${category.toLowerCase()}`}
            className="p-1 px-2 border rounded-lg bg-black text-white text-sm cursor-pointer">
            {category}
        </Link>
    )
}

export default async function Filter() {

    const categories = await getCategories();
    const products = await getProducts({});

    return (
        <FilterClient categories={categories} products={products} />
    )
}