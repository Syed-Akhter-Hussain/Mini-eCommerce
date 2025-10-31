const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const jwt = require("jsonwebtoken");
const Product = require("./models/Product");

const app = express();
app.use(cors());
app.use(express.json());

// Simple admin login (demo)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    const token = jwt.sign({ username }, process.env.JWT_SECRET || "secretkey", { expiresIn: "2h" });
    return res.json({ token });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync({ force: false }).then(async () => {
  console.log("DB synced");
  // seed sample if empty
  const count = await Product.count();
  if (count === 0) {
    await Product.bulkCreate([
      { name: "Wireless Mouse", price: 19.99, category: "Accessories", stockStatus: "In Stock" },
      { name: "Bluetooth Headset", price: 49.5, category: "Audio", stockStatus: "In Stock" },
      { name: "USB-C Charger", price: 25.0, category: "Chargers", stockStatus: "Out of Stock" }
    ]);
    console.log("Seeded sample products");
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error("Failed to sync DB:", err);
});
