const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipeRoute = require("./getRecipe.js");
const getDietRoute = require("./getDiet.js");
const postRecipeRoute = require ("./postRecipe.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipe", getRecipeRoute);
router.use("/diet", getDietRoute);
router.use("/recipe", postRecipeRoute);


module.exports = router;
