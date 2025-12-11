import { authMiddleware, adminOnly } from '../middlewares/auth.middleware.js';
import { addSoftware } from '../controllers/software.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { addSoftwareSchema } from '../validators/software.validator.js';
import express from 'express';
const router = express.Router()
router.post("/addsoftware", authMiddleware, adminOnly, validate(addSoftwareSchema), addSoftware);

export default router;