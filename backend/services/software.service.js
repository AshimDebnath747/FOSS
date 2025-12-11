import { pool } from "../config/db.js";
import jwt from 'jsonwebtoken';
export const addSW = async ({ name, description, category, pageurl, logourl, license }) => {
    const { rows: existing } = await pool.query(
        "SELECT id FROM software WHERE name = $1 or pageurl = $2",
        [name, pageurl]
    );

    if (existing.length > 0) {
        throw new Error("software already exists");
    }
    const { rows } = await pool.query(
        "INSERT INTO software (name, description, category , pageurl , logourl , license) VALUES ($1, $2, $3 , $4 , $5 , $6) RETURNING id",
        [name, description, category, pageurl, logourl, license]
    );
    return {
        id: rows[0].id,
        name,
        description,
        category,
        pageurl,
        logourl,
        license
    };

}