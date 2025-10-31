const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", verifyToken, getProducts);
router.post("/", verifyToken, addProduct);

module.exports = router;
