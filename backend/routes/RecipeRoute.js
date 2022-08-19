import express from 'express'
import{
    getRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/RecipesController.js'
import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/recipes',  verifyUser, getRecipe);
router.get('/recipes/:id',  verifyUser, getRecipeById);
router.post('/recipes', verifyUser, createRecipe);
router.patch('/recipes/:id', verifyUser, updateRecipe);
router.delete('/recipes/:id', verifyUser, deleteRecipe);

// router.get('/recipes', verifyUser, adminOnly, getRecipe);
// router.get('/recipes/:id', verifyUser, adminOnly, getRecipeById);
// router.post('/recipes', verifyUser, adminOnly, createRecipe);
// router.patch('/recipes/:id', verifyUser, adminOnly, updateRecipe);
// router.delete('/recipes/:id', verifyUser, adminOnly, deleteRecipe);


export default router;