import { getProducts } from "../../../../server/products/product";
import CategorySection from "../../Category"
import { ProductHolder } from "../../Product";

export default async function Category({ params }: {
    params: {
        category: string
    }
}) {

    const { category } = await params;

    const response = await getProducts(params.category);
    if ("error" in response) { return <div>{response.error}</div> }
    const { data } = response;

    return (
        <main className="min-h-screen py-10 px-2 lg:px-10">
            <CategorySection category={category}>
                {data.map(dat => <ProductHolder key={dat.name} name={dat.name} img={dat.image}
                    price={dat.price} rating={dat.rating} />)}
            </CategorySection>
        </main>
    )
}