import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  unhashed_psswd: String,
});


const Users = models.user || model('user', userSchema);

export default (Users);
