import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  const { userId, items, totalPrice } = req.body;
  const order = new Order({ userId, items, totalPrice });
  try {
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

export const getOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ error: "Something went wrong" });
  }
};
