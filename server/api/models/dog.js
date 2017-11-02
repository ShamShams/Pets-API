import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  race: { type: String, required: true },
  gentil: { type: Boolean, required: false },
  calme: { type: Boolean, required: false },
  joueur: { type: Boolean, required: false },
  affectueux: { type: Boolean, required: false },
  intelligent: { type: Boolean, required: false },
  propre: { type: Boolean, required: false }
}, { versionKey: false });

export default mongoose.model('Dog', dogSchema);
