export const addSoftware = async ({ name, description, category, homepageurl, logourl, license }) => {
    const { rows: existing } = await pool.query(
        "SELECT id FROM users WHERE name = $1 or homepageurl = $2",
        [name, homepageurl]
    );

    if (existing.length > 0) {
        throw new Error("software already exists");
    }
    const { rows } = await pool.query(
        "INSERT INTO software (name, description, category , homepageurl , logourl , license) VALUES ($1, $2, $3 , $3 , $4 , $5 , $6) RETURNING id",
        [name, description, category, homepageurl, logourl, license]
    );
    return {
        id: rows[0].id,
        name,
        description,
        category,
        homepageurl,
        logourl,
        license
    };

}