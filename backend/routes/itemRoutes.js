import express from 'express';
import { addItem, deleteItem, editItem, getItems } from '../controllers/ItemController.js';


const router = express.Router();

router.post('/add-item',addItem);
router.get('/get-items',getItems);
router.put('/edit-item/:id',editItem);
router.delete('/delete-item/:id',deleteItem)

export default router;