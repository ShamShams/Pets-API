import { Router } from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import Pet from '../models/pet';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage })

const router = Router();

// Ajouter un animal
router.post('/add', upload.single('petPhoto'), (req, res) => {
  let newPet = new Pet(req.body);
  newPet.petPhoto = `${req.file.filename}`;
  newPet.save((err, pet) => {
    if (err) res.send(err);
    res.redirect('http://localhost:3000');
    // res.json(pet);
  });
});

// Afficher tous les animaux
router.get('/', (req, res) => {
  Pet.find({}, (err, pets) => {
    if (err) res.send(err);
    res.json(pets);
  });
});

// Afficher un animal par son ID
router.get('/:id', (req, res) => {
  Pet.findById(req.params.id, (err, pet) => {
    if (err) res.send(err);
    res.json(pet);
  });
});

// Modifier un animal
router.post('/:id/update', (req, res) => {
  Pet.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) res.send(err);
    res.redirect('http://localhost:3000');
  });
});

// Supprimer un animal
router.get('/:id/delete', (req, res) => {
  Pet.findByIdAndRemove(req.params.id, (err, removedPet) => {
    if (err) res.send(err);
    res.redirect('http://localhost:3000');
  });
});

export default router;
