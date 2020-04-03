import { Router } from 'express';
const router = Router();

import { TokenValidation } from '../libs/verifyToken'
import { createOrUpdateSales, getSales, getAllSales, getNewSalesCode } from '../controllers/sales';

router.get('/newSalesId', TokenValidation, getNewSalesCode)
router.post('/', TokenValidation, createOrUpdateSales)
router.get('/', TokenValidation, getAllSales)
router.get('/:saleId', TokenValidation, getSales)

export default router;
