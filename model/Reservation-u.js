import { Schema, model, models } from 'mongoose';

const reservation_uSchema = new Schema({
  company: String,
  owner: String,
  address: String,
  price: String,
});

const Reservations_u =
  models.ureservation || model('ureservation', reservation_uSchema);

export default Reservations_u;
