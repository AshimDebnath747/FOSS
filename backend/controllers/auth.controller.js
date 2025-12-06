import { success } from "zod";

export const signup = async (req, res) => {
    try {
        const { token, user } = await signUpUser(req.body);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,        // true in production (HTTPS)
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(201).json({
            success: true,
            message: "user signed up successfully!",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    } catch (err) {
        return res.status(200).json({
            success: false,
            message: "user could not be registered!",
            data: err
        })
    }
}

export const login = async (req, res) => {
    try {
        const result = await loginUser(req.body);
        return res.status(201).json({
            success: true,
            message: "user signed up successfully!",
            data: result
        })
    } catch (err) {
        return res.status(200).json({
            success: false,
            message: "user could not be logged in!",
            data: err
        })
    }
}