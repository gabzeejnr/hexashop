"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Glasses } from "lucide-react";

export default function FilterClient({ categories, products }) {

    const router = useRouter()
    const [search, setSearch] = useState("");
    const count = products.data.length;

    async function handleSearch(e) {
        e.preventDefault();
        const query = search.trim();

        if (!query) {
            router.push("/products");
            return
        }

        router.push(`/products?search=${encodeURIComponent(query)}`)
    }

    return (
        <div>
            <div className="flex justify-between px-5 pt-5 pb-2 border-b-2 border-dotted ">
                <span className="text-2xl font-semibold">Products</span>
                <span>{count} items</span>
            </div>

            <form className="py-3 px-3 mt-10 flex flex-col items-center sm:flex-row"
                onSubmit={handleSearch}>
                <div className="relative flex items-center w-full max-w-100">
                    <input type="text" value={search} placeholder="Search products..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-5 pr-10 w-full py-2 rounded-xl ring-2 ring-teal-500"
                    />

                    <button type="submit" className="absolute right-3 cursor-pointer">
                        <Glasses />
                    </button>
                </div>
            </form>

            <div className="py-2 flex gap-2 items-center overflow-auto px-4">
                {categories.map(cat => (
                    <Link key={cat} href={`/products/category/${cat.toLowerCase()}`}
                        className="p-1 px-2 border rounded-lg bg-black text-white text-sm">
                        {cat}
                    </Link>
                ))}
            </div>
        </div>
    )
}