import { Router } from 'express';

import pets from '../controller/pets';

const router = Router();

router.use('/pets', pets);

export default router;
