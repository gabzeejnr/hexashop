import pool from "../config/db";
import { seed } from "./seed";
import type { Request, Response } from "express";

export async function getProducts(req: Request, res: Response) {
    try {
        const { rows } = await pool.query("SELECT * FROM products");
        if (rows.length <= 0) return res.status(401).json({ error: "" });

        return res.status(200).json({
            message: "Request successful.",
            rows
        })
    } catch (err) {
        console.log("Error completing request", err)
        return res.status(500).json({ error: "Internal server error." })
    }
}

export async function seedDatabase(req: Request, res: Response) {
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
            } finally{
                client.release();
            }
        }
    } catch (err) {
        console.error("Couldn't seed the database:", err);
        res.status(500).json({ erorr: "Internal server error." })
    }
}