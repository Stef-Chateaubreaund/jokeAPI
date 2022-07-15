const mongoose = require("mongoose");

//new mongoose.Schema is making a brand new object from a class and its the same
// the object that we pass in as a --parametter --determine the structure of our data just like a constructor
const jokeSchema = new mongoose.Schema({
    setup: String, 
    punchline: String,//this are property yay inside our model schema 
}, 
{timestamps: true}); 

const jokes = mongoose.model("Jokes", jokeSchema);//WHAT?

module.exports = jokes;