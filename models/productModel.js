const mongoose = require("mongoose");
const router = require("../routes");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: String,
    trim: true
  },

  name: {
    type: String,
    trim: true,
    required: "Product Name"
  },

  color: {
    type: String,
    trim: true,
  },

  price: {
    type: Number,
    currency: "USD",
    price: 9990,
    required: "Price (USD)"
  },

  bloomSeason: {
    type: String,
    trim: true,
  },

  plantingSeason: {
    type: String,
    trim: true,
  },

  sun: {
    type: String,
  },

  inStock: {
    type: Boolean
  },

  sale: {
    type: Boolean
  },

})




const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;