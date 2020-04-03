import { Router } from 'express';
const router = Router();

import { TokenValidation } from '../libs/verifyToken'
import { createOrUpdateCustomerReturn, getAllCustomerReturn, getNewCustomerReturnCode } from '../controllers/customerReturns';

router.get('/newCustomerReturnId', TokenValidation, getNewCustomerReturnCode)
router.post('/', TokenValidation, createOrUpdateCustomerReturn)
router.get('/', TokenValidation, getAllCustomerReturn)

export default router;
