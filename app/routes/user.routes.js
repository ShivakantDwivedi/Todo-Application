import {create, findAll, findOne, update, remove } from '../controllers/user.controller.js';

import express from 'express';
const router = express.Router();

router.
  get('/findall', findAll).
  get('/:userId', findOne).
  post('/create', create).
  put('/:userId', update).
  delete('/:userId', remove);

export default router;
