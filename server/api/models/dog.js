import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  race: { type: String, required: true },
  gentil: { type: Boolean, required: true },
  calme: { type: Boolean, required: true },
  joueur: { type: Boolean, required: true },
  affectueux: { type: Boolean, required: true },
  intelligent: { type: Boolean, required: true },
  propre: { type: Boolean, required: true }
}, { versionKey: false });

export default mongoose.model('Dog', dogSchema);
