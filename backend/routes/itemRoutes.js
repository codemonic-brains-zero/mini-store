import express from 'express';
import { addItem } from '../controllers/ItemController.js';


const router = express.Router();
router.post('/add-item',addItem);

export default router;