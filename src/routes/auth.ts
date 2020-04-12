import { Router } from "express";
const router = Router();

import { signUp, signIn, profile } from "../controllers/auth";
import { TokenValidation } from "../libs/verifyToken";

router.post("/register", signUp);
router.post("/login", signIn);
router.get("/profile", TokenValidation, profile);

export default router;
