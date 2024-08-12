import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  tags: [String],
  brand: String,
  sku: String,
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,
  returnPolicy: String,
  images: [String],
  thumbnail: String,
  eco: Number,
});

export default mongoose.models.Products || mongoose.model('Products', ProductSchema);