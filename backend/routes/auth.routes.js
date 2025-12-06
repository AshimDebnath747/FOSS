import express from 'express';
import { validate } from '../middlewares/validate.middleware.js';
import { loginSchema, signupSchema } from '../validators/auth.validator.js';
import { login, signup } from '../controllers/auth.controller.js';
const router = express.Router()

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
//router.post("/google-auth");

export default router;

