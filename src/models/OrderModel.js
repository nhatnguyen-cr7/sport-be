const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    totalQuantity: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    paymentMethod: String,
    orderStatus: { type: String, default: "pending" },
    shippingAddress: String,
    orderTime: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
