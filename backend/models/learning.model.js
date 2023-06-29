const mongoose=require('mongoose');
const toDoItemSchema=new mongoose.Schema({
    name:String
    });

const Tolearnitem =mongoose.model("Tolearnitem", toDoItemSchema);
const Learningitem=mongoose.model("Learningitem", toDoItemSchema);
const Learneditem=mongoose.model("Learneditem", toDoItemSchema);

module.exports={
    Tolearnitem:Tolearnitem,
    Learningitem:Learningitem,
    Learneditem:Learneditem
}