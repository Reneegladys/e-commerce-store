import Cart from '../models/cartModel.js';
import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.userId }).populate('items.productId');
  if (!cart || cart.items.length === 0)
    return res.status(400).json({ error: 'Cart is empty' });

  const total = cart.items.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);

  const order = new Order({
    userId: req.userId,
    items: cart.items.map(i => ({ productId: i.productId._id, quantity: i.quantity })),
    total
  });

  await order.save();
  await Cart.deleteOne({ userId: req.userId });

  res.json({ message: 'Order placed successfully', order });
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.userId }).populate('items.productId');
  res.json(orders);
};
