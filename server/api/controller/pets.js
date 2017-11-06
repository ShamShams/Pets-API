import { Router } from 'express';
import mongoose from 'mongoose';

import Pet from '../models/pet';

const router = Router();

// Ajouter un animal
router.post('/add', (req, res) => {
  let newPet = new Pet(req.body);
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
  Pet.findByIdAndUpdate(req.params.id, req.body, (err, prevPet) => {
    if (err) res.send(err);
    res.send(`${prevPet.nom} a été modifié`);
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
