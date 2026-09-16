import pool from "../config/db";
import { seed } from "./seed";
import { readJSON } from "../utils/json";
import { removeArrayDuplicates } from "../utils/functions";
import type { ErrorType } from "../types/global.types";
import type { CreateProduct, Product } from "../types/products.types";

type ProductResponse = {
    data: Product[],
    meta: {
        message: string,
        endpoint: string,
        status: number
    }
}

export async function getProducts({
    category, search, slug
}: {
    category?: string | null,
    search?: string | null,
    slug?: string
}): Promise<ProductResponse | ErrorType> {
    try {
        /* const { rows } = await pool.query("SELECT * FROM products");
        if (!rows.length) return {
            error: "No products found.",
            status: 404
        } */

        const data = await readJSON<Product[]>("products");
        const message = "Request successful..."
        // const data = rows

        if (category) {
            const filterbyCategory = data.filter(dat => dat.category.includes(category));
            return {
                data: filterbyCategory,
                meta: {
                    message,
                    endpoint: `products?category=${category}`,
                    status: 200
                }
            }
        }

        if (search) {
            const filterSearch = data.filter(dat => dat.name
                .toLowerCase()
                .includes(search.toLowerCase())
            );
            return {
                data: filterSearch,
                meta: {
                    message,
                    endpoint: `products?search=${search}`,
                    status: 200
                }
            }
        }

        if (slug) {
            const filterSearch = data.filter(dat => dat.slug === slug);
            return {
                data: filterSearch,
                meta: {
                    message,
                    endpoint: `products/product/${slug}`,
                    status: 200

                }
            }
        }

        return {
            data: data,
            meta: {
                message,
                endpoint: "products",
                status: 200
            }
        }
    } catch (err) {
        console.log("Error completing request:", err)
        return {
            error: "Internal server error.",
            status: 500
        }
    }
}

export async function createProduct(data: CreateProduct): Promise<
    {
        message: string,
        rows?: unknown,
        status: number
    } | ErrorType
> {
    try {
        const { name, price } = data;

        const { rows } = await pool.query("INSERT INTO products (name, price) VALUES($1, $2) RETURNING *", [name, price]);
        return {
            message: "Product created successfully.",
            rows,
            status: 201
        }
    } catch (err) {
        console.error("Error adding product:", err);
        return {
            error: "Failed to add product.",
            status: 500
        }
    }
}

export async function seedDatabase() {
    const seeds = seed;
    try {
        for (const [index, seed] of seeds.entries()) {
            const { name, description, category, price, image } = seed

            const client = await pool.connect();

            try {
                await client.query("BEGIN");

                const { rows } = await client.query(`INSERT INTO products (name, description, category, price, image)
                VALUES($1, $2, $3, $4, $5) RETURNING id`,
                    [name, description, category, price, image]);

                try {

                } catch (err) {
                    console.error("Image upload failed for ")
                }
            } catch (err) {
                await client.query("ROLLBACK");
                console.error("Failed to add ")
            } finally {
                client.release();
            }
        }
    } catch (err) {
        console.error("Couldn't seed the database:", err);
        return { erorr: "Internal server error." }
    }
}

export async function getCategories(): Promise<string[]> {
    // const { rows } = await pool.query("SELECT * FROM products");
    const dataData: Product[] = await readJSON("products");
    // const dataData = rows;
    const data: string[] = []
    dataData.map(d => {
        for (const cat of d.category) {
            data.push(cat)
        }
    })
    data.sort((a: string, b: string) => a.localeCompare(b))
    return removeArrayDuplicates(data);
}