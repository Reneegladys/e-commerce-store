import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  const { name, description, price, image } = req.body;
  const product = new Product({ name, description, price, image });
  try {
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: "Something went wrong" });
  }
};
