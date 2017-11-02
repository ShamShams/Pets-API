import { Router } from 'express';
import mongoose from 'mongoose';

import Dog from '../models/dog';

const router = Router();

// Ajouter un chien
router.post('/add', (req, res) => {
  let newDog = new Dog(req.body);
  newDog.save((err, dog) => {
    if (err) res.send(err);
    res.redirect('http://localhost:3000/');
  });
});

// Afficher tous les chiens
router.get('/', (req, res) => {
  Dog.find({}, (err, dogs) => {
    if (err) res.send(err);
    res.json(dogs);
  });
});

// Afficher un chien par son ID
router.get('/:id', (req, res) => {
  Dog.findById(req.params.id, (err, dog) => {
    if (err) res.send(err);
    res.json(dog);
  });
});

// Modifier un chien
router.post('/:id/update', (req, res) => {
  Dog.findByIdAndUpdate(req.params.id, req.body, (err, prevDog) => {
    if (err) res.send(err);
    res.send(`${prevDog.nom} a été modifié`);
  });
});

// Supprimer un chien
router.get('/:id/delete', (req, res) => {
  Dog.findByIdAndRemove(req.params.id, (err, removedDog) => {
    if (err) res.send(err);
    res.send(`${removedDog.nom} a été supprimé`)
  });
});

export default router;
