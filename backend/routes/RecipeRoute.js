import express from 'express'
import{
    getRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/RecipesController.js'
// import { verifyUser } from '../middleware/AuthUser.js';
import { verifyToken } from '../middleware/VerifyToken.js';
const router = express.Router();
router.get('/recipes', verifyToken, getRecipe);
router.get('/recipes/:id',  verifyToken, getRecipeById);
router.post('/recipes', verifyToken, createRecipe);
router.patch('/recipes/:id', verifyToken, updateRecipe);
router.delete('/recipes/:id', verifyToken, deleteRecipe);

export default router;