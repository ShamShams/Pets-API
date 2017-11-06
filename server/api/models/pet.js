import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  species: { type: String, required: true },
  name: { type: String, required: false },
  age: { type: String, required: true },
  breed: { type: String, required: true },
  affectionate: { type: Boolean, required: false },
  quiet: { type: Boolean, required: false },
  playful: { type: Boolean, required: false },
}, { versionKey: false });

export default mongoose.model('Pet', PetSchema);
