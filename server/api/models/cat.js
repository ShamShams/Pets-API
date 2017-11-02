import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  race: { type: String, required: true },
  gentil: { type: Boolean, required: false },
  calme: { type: Boolean, required: false },
  joueur: { type: Boolean, required: false },
  calin: { type: Boolean, required: false },
  miauleur: { type: Boolean, required: false }
}, { versionKey: false });

export default mongoose.model('Cat', catSchema);
