const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
const uri = process.env.RECIPE_DB_URI;
const recipeRoute = require('./routes/recipeList')
app.use(cors());
app.use(express.json());


mongoose.connect(uri)
.then(() => console.log("DB connected successfully"))
.catch( (error) =>  { console.log(" DB connection unsuccesful " , error) });

app.use('/', recipeRoute);

app.listen(port, () => {
    console.log(`Running on port! : ${port}`);
})
