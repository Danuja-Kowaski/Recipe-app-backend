//Modal for a singular recipe
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
        trim: true,
        //minlength : 3
    },
    ingredients : {
        type : String,
    },
    description : {
        type : String
    },
    //for each recipe in a list we will have an Id
    // _recipeListID : {
    //     type: mongoose.Types.ObjectId,
    //     require: true
    // }
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;