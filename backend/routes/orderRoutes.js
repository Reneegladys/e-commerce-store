import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import  authMiddleware  from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/', createOrder);
router.get('/', getOrders);

export default router;
