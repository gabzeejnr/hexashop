import { getProducts } from "../../../../server/products/product";

export default async function Product({ params }: {
    params: Promise<{
        slug: string
    }>
}) {

    const { slug } = await params;
    const res = await getProducts({ slug });
    if ("error" in res) return <div>{res.error}</div>

    const { data } = res

    return (
        <main>
            The product is:

            <ul className="list-disc">
                {data.map(dat =>
                    <div key={dat.id}>
                        <li>slug: {dat.slug}</li>
                        <li>source: {dat.source}</li>
                        <li>Product name: {dat.name}</li>
                        <li>Description: {dat.description}</li>
                        <li>Categories:
                            <ul>
                                {dat.category.map(cat => <li key={cat}>{cat}</li>)}
                            </ul>
                        </li>
                        <li>Rating: {dat.rating}</li>
                        <li>Price: ${dat.price}</li>
                        <li>Image Link: {dat.image}</li>
                    </div>
                )}
            </ul>
        </main>
    )
}