import pool from "../config/db";
import { seed } from "./seed";
import type { CreateProduct } from "../types/products.types";

export async function getProducts() {
    try {
        const { rows } = await pool.query("SELECT * FROM products");
        if (rows.length <= 0) return { error: "No products found." }

        return {
            message: "Request successful.",
            rows
        }
    } catch (err) {
        console.log("Error completing request:", err)
        return { error: "Internal server error." }
    }
}

export async function createProduct(data: CreateProduct) {
    try {
        const { name, price } = data;

        const { rows } = await pool.query("INSERT INTO products (name, price) VALUES($1, $2) RETURNING *", [name, price]);
        return rows[0];
    } catch (err) {
        console.error("Error adding product:", err);
        return { error: "Failed to add product." }
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