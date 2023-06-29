const mongoose= require("mongoose");

const problemSchema=new mongoose.Schema({
    name: String,
    difficulty: Number,
    topic: String,
    platform: String,
});
const Problem=mongoose.model("Problem", problemSchema);

module.exports=Problem;
