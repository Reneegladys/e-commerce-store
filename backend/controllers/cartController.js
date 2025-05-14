import Cart  from '../models/cartModel.js';
import Product from '../models/productModel.js';

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.userId }).populate('items.productId');
  res.json(cart || { items: [] });
};

export const addToCart = async (req, res) => {
  const { productId } = req.body;
  let cart = await Cart.findOne({ userId: req.userId });
  if (!cart) cart = new Cart({ userId: req.userId, items: [] });

  const item = cart.items.find(i => i.productId.toString() === productId);
  if (item) item.quantity++;
  else cart.items.push({ productId, quantity: 1 });

  await cart.save();
  res.json(cart);
};

export const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  let cart = await Cart.findOne({ userId: req.userId });
  cart.items = cart.items.filter(i => i.productId.toString() !== productId);
  await cart.save();
  res.json(cart);
};
