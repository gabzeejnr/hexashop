import { getProducts } from "../../../../server/products/product";
import CategorySection from "../../Category"
import { ProductHolder } from "../../Product";

export default async function Category({ params }: {
    params: Promise<{
        category: string
    }>
}) {

    const { category } = await params;

    const response = await getProducts({ category });
    if ("error" in response) { return <div>{response.error}</div> }
    const { data } = response;

    return (
        <main className="min-h-screen py-10 px-2 lg:px-10">
            <CategorySection category={category}>
                {data.map(dat => <ProductHolder key={dat.name} name={dat.name} img={dat.image} slug={dat.slug}
                    price={dat.price} rating={dat.rating} />)}
            </CategorySection>
        </main>
    )
}