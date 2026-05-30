import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: String,
      name: String,
      price: String,
      imageUrl: String,
      quantity: Number,
    },
  ],
  total: { type: Number, required: true },
  address: {
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
  },
  paymentMethod: { type: String, default: "COD" },
  paymentId: { type: String, default: "COD" },
  status: {
    type: String,
    default: "confirmed",
    enum: ["confirmed", "processing", "shipped", "delivered", "cancelled"],
  },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);