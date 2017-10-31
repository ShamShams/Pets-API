import { Router } from 'express';

import cats from '../controller/cats';
import dogs from '../controller/dogs';

const router = Router();

router.use('/chat', cats);
router.use('/chiens', dogs);

export default router;
