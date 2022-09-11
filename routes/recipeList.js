const router = require('express').Router();

//import model
const recipeModel = require('../models/recipe.modal');

//adding recipe to db
router.post('/api/recipe', async (req, res) => {
    try{
        const newRecipe = new recipeModel({
            title : req.body.title,
            ingredients : req.body.ingredients,
            description : req.body.description
        })
        const saveItem = await newRecipe.save()
        res.status(200).json('Recipe Added successfully')
    }catch(err){
        res.json(err);
    }
})

//get all recipes
router.get('/api/recipes', async (req, res) =>{
    try{
        const allRecipes = await recipeModel.find({});
        res.status(200).json(allRecipes)
    }catch(err){
        res.json(err);
    }
})

//update a recipe
router.put('/api/recipe/:id', async (req, res) => {
    try{
        const updateRecipe =  await recipeModel.findByIdAndUpdate(req.params.id, {$set : req.body});
        res.status(200).json('Recipe updated');
    }catch(err){
        res.json(err);
    }
})

//delete a recipe
// router.delete('/api/recipe/:id', async (res, req) =>{
//     try{
//         const deleteRecipe = await recipeModel.findByIdAndRemove(req.params.id);
//         res.status(200).json("Recipe deleted");
//     }catch(err){
//         res.json(err)
//     }
// })

router.delete('/api/recipe/:id', async (req, res)=>{
    try{
      //find the item by its id and delete it
      const deleteRecipe = await recipeModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Recipe Deleted');
    }catch(err){
      res.json(err);
    }
  })


module.exports = router;