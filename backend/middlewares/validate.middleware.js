export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body) //Zod validation
        next()
    } catch (err) {
        return res.status(400).json({
            success: false,
            errors: err.errors.map(e => e.message)
        });
    }
};