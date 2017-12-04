import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  species: { type: String, required: false },
  name: { type: String, required: false },
  breed: { type: String, required: false },
  sex: { type: String, required: false },
  age: { type: String, required: false },
  affectionate: { type: Boolean, required: false },
  quiet: { type: Boolean, required: false },
  playful: { type: Boolean, required: false },
  description: { type: String, required: false },
  photo: { type: String, required: false },
  department: { type: Number, required: false },
  city: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: Number, required: false }
}, { versionKey: false });

export default mongoose.model('Pet', PetSchema);
