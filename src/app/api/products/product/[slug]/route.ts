import { NextRequest } from "next/server";
import { getProducts } from "../../../../../server/products/product";

export async function GET(
    req: NextRequest,
    { params }: {
        params: Promise<{
            slug: string
        }>
    }
) {

    const { slug } = await params;
    const product = await getProducts({ slug });

    return Response.json(product);

}