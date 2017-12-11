import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  species: { type: String, required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: String, required: true },
  affectionate: { type: Boolean, required: false },
  quiet: { type: Boolean, required: false },
  playful: { type: Boolean, required: false },
  description: { type: String, required: false },
  photo: { type: String, required: false },
  department: { type: Number, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: false }
}, { versionKey: false });

export default mongoose.model('Pet', PetSchema);
