const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  email: {},
  password: String,
});
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
