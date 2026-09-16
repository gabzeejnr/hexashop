import Hero from "./Hero";
import Filter from "./Filter"
import Products from "./Product"

export default function ProductsPage({ searchParams }) {

    return (
        <main className="flex flex-col py-10 min-h-screen">
            <section className="h-100">
                <Hero />
            </section>
            <section className="mt-5">
                <Filter />
            </section>
            <section className="mt-10">
                <Products searchParams={searchParams} />
            </section>
        </main>
    )
}