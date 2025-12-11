import { addSoftware } from "../services/software.service.js";

export const addSoftware = async (req, res) => {
    try {
        const result = await addSoftware(req.body);

        return res.status(201).json({
            success: true,
            message: "software added successfully!",
            data: result
        })
    } catch (err) {
        console.log("message:", err.message)
        return res.status(200).json({
            success: false,
            message: "software could not be added!",
            data: err.message
        })
    }
}