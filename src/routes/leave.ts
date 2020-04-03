import { Router } from 'express';
const router = Router();

import { TokenValidation } from '../libs/verifyToken'
import { createOrUpdateLeave, getAllLeaves } from '../controllers/leave';

router.post('/', TokenValidation, createOrUpdateLeave)
router.get('/', TokenValidation, getAllLeaves)

export default router;
