import { Router } from "express";
import { register, login, } from "../controller/authController.js";
import { authenticate } from "../middleware/authenticate.js";
import { registerSchema, loginSchema } from "../schema/authSchema.js";
import { validate } from "../middleware/validate.js";
import { loginLimiter } from "../middleware/ratelimiter.js";
const router = Router();

// router.post("/logout", authenticate, logout);

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema),loginLimiter ,login);
export default router;