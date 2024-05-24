import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  company: String,
  owner: String,
  address: String,
  price: String,
});

const Products = models.product || model('product', productSchema);

export default Products;
