import express from 'express';

const router=express.Router();

import { signIn } from '../controllers/accounts.js';

router.post('/signin', signIn);
export default router;