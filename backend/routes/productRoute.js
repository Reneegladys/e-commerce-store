import express from 'express';
import {
  getProducts,
  getProductById,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/', searchProducts); // if you're combining it with getProducts, use conditionally


export default router;
