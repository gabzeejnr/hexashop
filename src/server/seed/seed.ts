import pool from "../config/db";
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