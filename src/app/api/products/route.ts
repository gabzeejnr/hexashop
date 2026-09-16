import { NextRequest } from "next/server";
import { createProduct, getProducts } from "../../../server/products/product";

export async function GET(req: NextRequest) {
    const category = req.nextUrl.searchParams.get("category");
    // const limit = req.nextUrl.searchParams.get("limit");

    const products = await getProducts({ category });

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