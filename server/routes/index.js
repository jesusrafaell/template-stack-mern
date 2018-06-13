import express from 'express';
import indexController from '../controller/indexController';

const router = express.Router();

router.get('/', indexController.find);

export default router;
