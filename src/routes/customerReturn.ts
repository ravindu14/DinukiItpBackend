import { Router } from "express";
const router = Router();

import { TokenValidation } from "../libs/verifyToken";
import {
  createOrUpdateCustomerReturn,
  getAllCustomerReturn,
  getNewCustomerReturnCode,
  deleteCustomerReturn,
} from "../controllers/customerReturns";

router.get("/newCustomerReturnId", TokenValidation, getNewCustomerReturnCode);
router.post("/", TokenValidation, createOrUpdateCustomerReturn);
router.get("/", TokenValidation, getAllCustomerReturn);
router.delete("/:returnId", TokenValidation, deleteCustomerReturn);

export default router;
