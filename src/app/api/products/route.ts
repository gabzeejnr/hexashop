import { createProduct, getProducts } from "../../../server/products/product";

export async function GET() {
    const products = await getProducts();
    console.log(Response.json(products))
    return Response.json(products)
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const product = await createProduct(body);
        return Response.json(product, { status: 201 });
    } catch (err) {
        console.error("Couldn't post request... Try again:", err);
        return
    }
}