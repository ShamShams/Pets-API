import { Router } from 'express';
import mongoose from 'mongoose';

import Cat from '../models/cat';

const router = Router();

// Ajouter un chat
router.post('/add', (req, res) => {
  let newCat = new Cat(req.body);
  newCat.save((err, cat) => {
    if (err) res.send(err);
    res.json(cat);
  });
});

// Afficher tous les chats
router.get('/', (req, res) => {
  Cat.find({}, (err, cats) => {
    if (err) res.send(err);
    res.json(cats);
  });
});



export default router;
