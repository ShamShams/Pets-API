import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  race: { type: String, required: true },
  gentil: { type: Boolean, required: true },
  calme: { type: Boolean, required: true },
  joueur: { type: Boolean, required: true },
  calin: { type: Boolean, required: true },
  miauleur: { type: Boolean, required: true }
}, { versionKey: false });

export defaut mongoose.model('Cat', catSchema);
