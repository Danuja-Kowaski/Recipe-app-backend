//Modal for a singular recipe list
const mongoose = require('mongoose');

const recipeListSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    }
    //might need to add an picture for model
});

const RecipeList = mongoose.model('RecipeList', recipeListSchema);

module.exports = RecipeList;