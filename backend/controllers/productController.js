const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const offset = (page - 1) * limit;
    const where = category ? { category } : {};

    const { rows, count } = await Product.findAndCountAll({ where, limit, offset, order: [["id","ASC"]] });
    res.json({ data: rows, total: count, page, limit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, price, category, stockStatus } = req.body;
    const product = await Product.create({ name, price, category, stockStatus });
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Bad request" });
  }
};
