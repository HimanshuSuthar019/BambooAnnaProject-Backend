import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  category: { type: String, default: "General" },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);