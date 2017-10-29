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

export default router;
