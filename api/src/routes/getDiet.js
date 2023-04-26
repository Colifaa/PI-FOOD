const { Router } = require("express");
const { TypeDiet } = require("../db");
const router = Router();


router.get("/", async (req, res) => {
    let types = [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "whole 30",
        "fodmap friendly",
        "ketogenic",
        "pescatarian",
        "vegan",
    ]
    types.forEach(async (e)=> {
        await TypeDiet.findOrCreate({
            where: { name: e }
        })
    });
    let result = await TypeDiet.findAll()
    return res.send(result)
});
module.exports = router ;



/* El método Sequelize findOrCreate()es un método de consulta
 que intenta encontrar una entrada en su tabla
  o crear una nueva entrada cuando no se encuentra nada 
  El método requiere WHERE que se especifique una condición,
   y cuando no se encuentra ninguna entrada existente,
    aparecerá INSERT una nueva fila en la tabla usando los parámetros que especificó cuando llamó al método.
    
    
    El método Sequelize findAll()
    Genera una SELECTconsulta estándar 
    que recuperará todas las entradas de la tabla 
    (a menos que esté restringido por algo como una wherecláusula, por ejemplo).

  - [ ] __GET /diets__:
  - Obtener todos los tipos de dieta posibles
  - En una primera instancia, cuando no exista ninguno, 
  deberán precargar la base de datos con los tipos de datos
   indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets)
  */